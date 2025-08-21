import {
  CalculatedIngredient,
  Ingredient,
  IngredientCategory,
  MeasurementUnit,
  PREFERRED_UNITS,
  Recipe,
  RecipeCalculation,
  UNIT_CONVERSIONS,
  UnitSystem,
} from "../types/recipe";

export class PizzaCalculationService {
  static calculatePizzaRecipe(
    recipe: Recipe,
    pizzaCount: number,
    discWeight: number,
    hydrationPercentage: number,
    unitSystem: UnitSystem = UnitSystem.METRIC,
    yeastType: string = "fresh" // "fresh" for Fermento Fresco, "dry" for Fermento Biológico Seco
  ): RecipeCalculation {
    // Check pizza type to determine which calculation method to use
    const pizzaType = recipe.pizzaType || "neapolitan";

    if (pizzaType === "ny") {
      return this.calculateNewYorkPizzaRecipe(
        recipe,
        pizzaCount,
        discWeight,
        hydrationPercentage,
        unitSystem,
        yeastType
      );
    }

    // Default to Neapolitan calculation
    // Calculate total dough mass based on disc weight and pizza count
    const totalDoughWeight = discWeight * pizzaCount;

    // Calculate flour weight based on the formula from the spreadsheet
    // Formula: F = T / (1 + H + s + y)
    // Where:
    // T = total dough mass (n * b)
    // H = hydration as decimal (e.g., 65% = 0.65)
    // s = salt percentage over flour (e.g., 2.5% = 0.025)
    // y = yeast percentage over flour (e.g., 0.2% = 0.002)

    // Get salt and yeast percentages from ingredients
    const saltPercentage = this.getSaltPercentage(recipe.ingredients) / 100; // Convert from % to decimal
    const yeastPercentage =
      this.getYeastPercentage(recipe.ingredients, yeastType, recipe.pizzaType) /
      100; // Convert from % to decimal
    const hydrationDecimal = hydrationPercentage / 100; // Convert from % to decimal

    // Calculate flour weight using the formula
    const totalFlourWeight =
      totalDoughWeight /
      (1 + hydrationDecimal + saltPercentage + yeastPercentage);

    // Calculate other ingredient weights
    const waterWeight = totalFlourWeight * hydrationDecimal;
    const saltWeight = totalFlourWeight * saltPercentage;
    const yeastWeight = totalFlourWeight * yeastPercentage;

    // Calculate ingredients based on baker's percentages
    const calculatedIngredients = recipe.ingredients.map((ingredient) => {
      // For flour ingredients, distribute the total flour weight according to their relative proportions
      if (ingredient.category === IngredientCategory.FLOUR) {
        return this.calculateFlourIngredient(
          ingredient,
          totalFlourWeight,
          unitSystem
        );
      }
      // For water, use the calculated water weight
      else if (
        ingredient.category === IngredientCategory.LIQUID &&
        (ingredient.name.toLowerCase().includes("água") ||
          ingredient.name.toLowerCase().includes("agua") ||
          ingredient.name.toLowerCase().includes("water"))
      ) {
        return this.calculateWaterIngredient(
          ingredient,
          waterWeight,
          unitSystem
        );
      }
      // For salt, use the calculated salt weight
      else if (ingredient.category === IngredientCategory.SALT) {
        return this.calculateSaltIngredient(ingredient, saltWeight, unitSystem);
      }
      // For yeast, use the calculated yeast weight
      else if (
        ingredient.category === IngredientCategory.LEAVENING &&
        (ingredient.name.toLowerCase().includes("levedura") ||
          ingredient.name.toLowerCase().includes("fermento") ||
          ingredient.name.toLowerCase().includes("yeast"))
      ) {
        return this.calculateYeastIngredient(
          ingredient,
          yeastWeight,
          unitSystem,
          yeastType,
          recipe.pizzaType
        );
      }
      // For other ingredients, calculate based on flour weight
      else {
        return this.calculateOtherIngredient(
          ingredient,
          totalFlourWeight,
          unitSystem
        );
      }
    });

    return {
      totalWeight: totalDoughWeight,
      breadWeight: discWeight, // For pizza, this is the disc weight
      quantity: pizzaCount,
      ingredients: calculatedIngredients,
      hydrationPercentage: hydrationPercentage,
      saltPercentage: this.getSaltPercentage(recipe.ingredients),
      unitSystem,
      yeastType, // Add the yeast type to the calculation result
    };
  }

  private static calculateFlourIngredient(
    ingredient: Ingredient,
    totalFlourWeight: number,
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // For flour ingredients in pizza recipes, the percentage might be 0
    // In this case, we use the total flour weight directly
    const calculatedAmountInGrams =
      ingredient.percentage > 0
        ? (ingredient.percentage / 100) * totalFlourWeight
        : totalFlourWeight;

    // Convert to appropriate display unit
    const { displayUnit, displayAmount } = this.convertToDisplayUnit(
      calculatedAmountInGrams,
      ingredient.category,
      unitSystem
    );

    return {
      ...ingredient,
      calculatedAmount: calculatedAmountInGrams,
      displayUnit,
      displayAmount,
    };
  }

  private static calculateWaterIngredient(
    ingredient: Ingredient,
    waterWeight: number,
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // For water, use the calculated water weight directly
    // Even if percentage is 0 in the recipe, we use the calculated water weight
    const calculatedAmountInGrams = waterWeight;

    // Convert to appropriate display unit
    const { displayUnit, displayAmount } = this.convertToDisplayUnit(
      calculatedAmountInGrams,
      ingredient.category,
      unitSystem
    );

    return {
      ...ingredient,
      calculatedAmount: calculatedAmountInGrams,
      displayUnit,
      displayAmount,
    };
  }

  private static calculateOtherIngredient(
    ingredient: Ingredient,
    totalFlourWeight: number,
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // Calculate based on flour weight (baker's percentage)
    const calculatedAmountInGrams =
      (ingredient.percentage / 100) * totalFlourWeight;

    // Convert to appropriate display unit
    const { displayUnit, displayAmount } = this.convertToDisplayUnit(
      calculatedAmountInGrams,
      ingredient.category,
      unitSystem
    );

    return {
      ...ingredient,
      calculatedAmount: calculatedAmountInGrams,
      displayUnit,
      displayAmount,
    };
  }

  private static convertToDisplayUnit(
    amountInGrams: number,
    category: IngredientCategory,
    unitSystem: UnitSystem
  ): { displayUnit: MeasurementUnit; displayAmount: number } {
    const preferredUnits = PREFERRED_UNITS[unitSystem][category];

    // For metric system, convert to kg if amount >= 1000g (or 1000ml for liquids)
    if (unitSystem === UnitSystem.METRIC && amountInGrams >= 1000) {
      const weightInKg = amountInGrams / 1000;
      const roundedWeight = this.roundToAppropriateDecimalPlaces(weightInKg);
      return {
        displayUnit: MeasurementUnit.KILOGRAMS,
        displayAmount: roundedWeight,
      };
    }

    // For salt in metric system, prioritize grams to show absolute values
    if (
      category === IngredientCategory.SALT &&
      unitSystem === UnitSystem.METRIC
    ) {
      return {
        displayUnit: MeasurementUnit.GRAMS,
        displayAmount: this.roundToAppropriateDecimalPlaces(amountInGrams),
      };
    }

    // Find the best unit for display (avoiding very small or very large numbers)
    let bestUnit = preferredUnits[0];
    let bestAmount = amountInGrams / UNIT_CONVERSIONS[bestUnit];

    for (const unit of preferredUnits) {
      const convertedAmount = amountInGrams / UNIT_CONVERSIONS[unit];

      // Prefer units that result in numbers between 0.1 and 1000
      if (convertedAmount >= 0.1 && convertedAmount <= 1000) {
        // If current amount is in a better range, use it
        if (
          bestAmount < 0.1 ||
          bestAmount > 1000 ||
          (convertedAmount >= 1 && convertedAmount < bestAmount)
        ) {
          bestUnit = unit;
          bestAmount = convertedAmount;
        }
      }
    }

    // Round to appropriate precision
    const roundedAmount = this.roundToAppropriateDecimalPlaces(bestAmount);

    return {
      displayUnit: bestUnit,
      displayAmount: roundedAmount,
    };
  }

  private static roundToAppropriateDecimalPlaces(amount: number): number {
    // Always use 2 decimal places for consistency
    return Math.round(amount * 100) / 100;
  }

  static getSaltPercentage(ingredients: Ingredient[]): number {
    // Get salt percentage over flour from ingredients
    const saltIngredients = ingredients.filter(
      (ing) => ing.category === IngredientCategory.SALT
    );
    if (saltIngredients.length === 0) return 2.5; // Default salt percentage if not specified

    return saltIngredients.reduce((sum, ing) => sum + ing.percentage, 0);
  }

  static getYeastPercentage(
    ingredients: Ingredient[],
    yeastType: string = "fresh",
    pizzaType: string = "neapolitan"
  ): number {
    // Different yeast percentages based on pizza type and yeast type
    if (pizzaType === "ny") {
      // New York style pizza uses different yeast percentages
      if (yeastType === "dry") {
        return 0.25; // 0.25% for Fermento Biológico Seco in NY style
      } else {
        return 0.76; // 0.76% for Fermento Fresco in NY style
      }
    } else {
      // Neapolitan style (default)
      if (yeastType === "dry") {
        return 0.07; // 0.07% for Fermento Biológico Seco
      } else {
        return 0.2; // 0.20% for Fermento Fresco (default)
      }
    }
  }

  private static calculateSaltIngredient(
    ingredient: Ingredient,
    saltWeight: number,
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // For salt, use the calculated salt weight directly
    // Even if percentage is 0 in the recipe, we use the calculated salt weight
    const calculatedAmountInGrams = saltWeight;

    // Convert to appropriate display unit
    const { displayUnit, displayAmount } = this.convertToDisplayUnit(
      calculatedAmountInGrams,
      ingredient.category,
      unitSystem
    );

    return {
      ...ingredient,
      calculatedAmount: calculatedAmountInGrams,
      displayUnit,
      displayAmount,
    };
  }

  private static calculateYeastIngredient(
    ingredient: Ingredient,
    yeastWeight: number,
    unitSystem: UnitSystem,
    yeastType: string = "fresh",
    pizzaType: string = "neapolitan"
  ): CalculatedIngredient {
    // For yeast, use the calculated yeast weight directly based on the selected yeast type
    let calculatedAmountInGrams = yeastWeight;

    // Replace the ingredient name with the selected yeast type label
    const yeastTypeLabel =
      yeastType === "fresh" ? "Fermento Fresco" : "Fermento Biológico Seco";
    // Just use the yeast type label as the ingredient name
    const updatedName = yeastTypeLabel;

    // No need to apply conversion factors here as we're already using the correct percentage
    // in the getYeastPercentage method

    // For New York style pizza, always display yeast in grams
    if (pizzaType === "ny") {
      return {
        ...ingredient,
        name: updatedName,
        calculatedAmount: calculatedAmountInGrams,
        displayUnit: MeasurementUnit.GRAMS,
        displayAmount: this.roundToAppropriateDecimalPlaces(
          calculatedAmountInGrams
        ),
      };
    }

    // For other pizza types, use the standard unit conversion
    const { displayUnit, displayAmount } = this.convertToDisplayUnit(
      calculatedAmountInGrams,
      ingredient.category,
      unitSystem
    );

    return {
      ...ingredient,
      name: updatedName,
      calculatedAmount: calculatedAmountInGrams,
      displayUnit,
      displayAmount,
    };
  }

  // Method for calculating New York style pizza recipe
  static calculateNewYorkPizzaRecipe(
    recipe: Recipe,
    pizzaCount: number,
    discWeight: number,
    hydrationPercentage: number,
    unitSystem: UnitSystem = UnitSystem.METRIC,
    yeastType: string = "fresh"
  ): RecipeCalculation {
    // Calculate total dough mass based on disc weight and pizza count
    const totalDoughWeight = discWeight * pizzaCount;

    // Get percentages for NY pizza formula
    const saltPercentage = this.getSaltPercentage(recipe.ingredients) / 100; // Convert from % to decimal
    const yeastPercentage =
      this.getYeastPercentage(recipe.ingredients, yeastType, "ny") / 100;
    const hydrationDecimal = hydrationPercentage / 100;
    const oilPercentage = 0.03; // 3% oil for NY style
    const sugarPercentage = 0.01; // 1% sugar for NY style

    // Calculate flour weight using the NY formula
    // Formula: F = T / (1 + H + s + y_dry + o + u)
    // Where:
    // T = total dough mass (n * b)
    // H = hydration as decimal
    // s = salt percentage over flour
    // y_dry = yeast percentage over flour
    // o = oil percentage over flour
    // u = sugar percentage over flour
    const totalFlourWeight =
      totalDoughWeight /
      (1 +
        hydrationDecimal +
        saltPercentage +
        yeastPercentage +
        oilPercentage +
        sugarPercentage);

    // Calculate other ingredient weights
    const waterWeight = totalFlourWeight * hydrationDecimal;
    const saltWeight = totalFlourWeight * saltPercentage;
    const yeastWeight = totalFlourWeight * yeastPercentage;
    const oilWeight = totalFlourWeight * oilPercentage;
    const sugarWeight = totalFlourWeight * sugarPercentage;

    // Calculate ingredients based on baker's percentages
    const calculatedIngredients = recipe.ingredients.map((ingredient) => {
      // For flour ingredients
      if (ingredient.category === IngredientCategory.FLOUR) {
        return this.calculateFlourIngredient(
          ingredient,
          totalFlourWeight,
          unitSystem
        );
      }
      // For water
      else if (
        ingredient.category === IngredientCategory.LIQUID &&
        (ingredient.name.toLowerCase().includes("água") ||
          ingredient.name.toLowerCase().includes("agua") ||
          ingredient.name.toLowerCase().includes("water"))
      ) {
        return this.calculateWaterIngredient(
          ingredient,
          waterWeight,
          unitSystem
        );
      }
      // For salt
      else if (ingredient.category === IngredientCategory.SALT) {
        return this.calculateSaltIngredient(ingredient, saltWeight, unitSystem);
      }
      // For yeast
      else if (
        ingredient.category === IngredientCategory.LEAVENING &&
        (ingredient.name.toLowerCase().includes("levedura") ||
          ingredient.name.toLowerCase().includes("fermento") ||
          ingredient.name.toLowerCase().includes("yeast"))
      ) {
        return this.calculateYeastIngredient(
          ingredient,
          yeastWeight,
          unitSystem,
          yeastType,
          "ny"
        );
      }
      // For oil
      else if (
        ingredient.category === IngredientCategory.FAT &&
        (ingredient.name.toLowerCase().includes("óleo") ||
          ingredient.name.toLowerCase().includes("oleo") ||
          ingredient.name.toLowerCase().includes("oil") ||
          ingredient.name.toLowerCase().includes("azeite"))
      ) {
        return {
          ...ingredient,
          calculatedAmount: oilWeight,
          ...this.convertToDisplayUnit(
            oilWeight,
            ingredient.category,
            unitSystem
          ),
        };
      }
      // For sugar
      else if (ingredient.category === IngredientCategory.SWEETENER) {
        return {
          ...ingredient,
          calculatedAmount: sugarWeight,
          ...this.convertToDisplayUnit(
            sugarWeight,
            ingredient.category,
            unitSystem
          ),
        };
      }
      // For other ingredients
      else {
        return this.calculateOtherIngredient(
          ingredient,
          totalFlourWeight,
          unitSystem
        );
      }
    });

    return {
      totalWeight: totalDoughWeight,
      breadWeight: discWeight, // For pizza, this is the disc weight
      quantity: pizzaCount,
      ingredients: calculatedIngredients,
      hydrationPercentage: hydrationPercentage,
      saltPercentage: this.getSaltPercentage(recipe.ingredients),
      unitSystem,
      yeastType, // Add the yeast type to the calculation result
    };
  }

  static formatAmount(amount: number, unit: MeasurementUnit): string {
    const roundedAmount = this.roundToAppropriateDecimalPlaces(amount);

    // Use comma formatting for metric units
    if (
      unit === MeasurementUnit.GRAMS ||
      unit === MeasurementUnit.KILOGRAMS ||
      unit === MeasurementUnit.MILLILITERS ||
      unit === MeasurementUnit.LITERS
    ) {
      return `${this.formatNumberWithCommas(roundedAmount)}${unit}`;
    }

    // For non-metric units, still use 2 decimal places
    return `${amount.toFixed(2)}${unit}`;
  }

  private static formatNumberWithCommas(number: number): string {
    // Custom implementation for React Native
    // Format with fixed 2 decimal places
    const numStr = number.toFixed(2);
    const parts = numStr.split(".");

    // Add dots as thousand separators to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Join with comma for decimal separator
    return parts.join(",");
  }
}

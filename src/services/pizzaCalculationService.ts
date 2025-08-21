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
      this.getYeastPercentage(recipe.ingredients, yeastType) / 100; // Convert from % to decimal
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
          yeastType
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
    yeastType: string = "fresh"
  ): number {
    // Always use the specified percentages based on yeast type
    if (yeastType === "dry") {
      return 0.07; // 0.07% for Fermento Biológico Seco
    } else {
      return 0.2; // 0.20% for Fermento Fresco (default)
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
    yeastType: string = "fresh"
  ): CalculatedIngredient {
    // For yeast, use the calculated yeast weight directly based on the selected yeast type
    let calculatedAmountInGrams = yeastWeight;

    // No need to apply conversion factors here as we're already using the correct percentage
    // in the getYeastPercentage method

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

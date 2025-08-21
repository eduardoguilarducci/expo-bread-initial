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
    unitSystem: UnitSystem = UnitSystem.METRIC
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
    const yeastPercentage = this.getYeastPercentage(recipe.ingredients) / 100; // Convert from % to decimal
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
          unitSystem
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
      breadWeight: discWeight, // For pizza, breadWeight is the disc weight
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
    if (amount < 1) {
      return Math.round(amount * 1000) / 1000; // 3 decimal places for small amounts
    } else if (amount < 10) {
      return Math.round(amount * 100) / 100; // 2 decimal places
    } else {
      return Math.round(amount); // Whole numbers for larger amounts
    }
  }

  static getSaltPercentage(ingredients: Ingredient[]): number {
    // Get salt percentage over flour from ingredients
    const saltIngredients = ingredients.filter(
      (ing) => ing.category === IngredientCategory.SALT
    );
    if (saltIngredients.length === 0) return 2.5; // Default salt percentage if not specified

    return saltIngredients.reduce((sum, ing) => sum + ing.percentage, 0);
  }

  static getYeastPercentage(ingredients: Ingredient[]): number {
    // Get yeast percentage over flour from ingredients
    const yeastIngredients = ingredients.filter(
      (ing) =>
        ing.category === IngredientCategory.LEAVENING &&
        (ing.name.toLowerCase().includes("levedura") ||
          ing.name.toLowerCase().includes("fermento") ||
          ing.name.toLowerCase().includes("yeast"))
    );

    if (yeastIngredients.length === 0) return 0.2; // Default yeast percentage if not specified

    return yeastIngredients.reduce((sum, ing) => sum + ing.percentage, 0);
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
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // For yeast, use the calculated yeast weight directly
    // Even if percentage is 0 in the recipe, we use the calculated yeast weight
    const calculatedAmountInGrams = yeastWeight;

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

    return `${roundedAmount}${unit}`;
  }

  private static formatNumberWithCommas(number: number): string {
    // Custom implementation for React Native
    const numStr = number.toString();
    const parts = numStr.split(".");

    // Add dots as thousand separators to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Join with comma for decimal separator
    return parts.join(",");
  }
}

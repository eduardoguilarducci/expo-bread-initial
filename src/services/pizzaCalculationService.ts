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
    // Calculate total dough weight based on disc weight and pizza count
    const totalDoughWeight = discWeight * pizzaCount;

    // Calculate flour weight based on hydration percentage
    // Formula: flourWeight = totalDoughWeight / (1 + hydration/100)
    const totalFlourWeight = totalDoughWeight / (1 + hydrationPercentage / 100);

    // Calculate water weight based on hydration percentage
    const waterWeight = totalFlourWeight * (hydrationPercentage / 100);

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
      // For water, use the hydration percentage directly
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
      saltPercentage: this.calculateSaltPercentage(recipe.ingredients),
      unitSystem,
    };
  }

  private static calculateFlourIngredient(
    ingredient: Ingredient,
    totalFlourWeight: number,
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // Calculate amount in grams
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

  private static calculateWaterIngredient(
    ingredient: Ingredient,
    waterWeight: number,
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // For water, use the calculated water weight directly
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

  static calculateSaltPercentage(ingredients: Ingredient[]): number {
    const flourWeight = ingredients
      .filter((ing) => ing.category === IngredientCategory.FLOUR)
      .reduce((sum, ing) => sum + ing.percentage, 0);

    const saltWeight = ingredients
      .filter((ing) => ing.category === IngredientCategory.SALT)
      .reduce((sum, ing) => sum + ing.percentage, 0);

    return flourWeight > 0 ? (saltWeight / flourWeight) * 100 : 0;
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

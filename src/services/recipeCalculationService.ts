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

export class RecipeCalculationService {
  static calculateRecipeByQuantity(
    recipe: Recipe,
    desiredQuantity: number,
    unitSystem: UnitSystem = UnitSystem.METRIC
  ): RecipeCalculation {
    // Calculate total weight based on desired quantity
    const totalWeight = recipe.breadWeight * desiredQuantity;

    // Calculate scale factor based on original recipe
    const scaleFactor = totalWeight / recipe.totalDoughWeight;

    const calculatedIngredients = recipe.ingredients.map((ingredient) =>
      this.calculateIngredient(ingredient, totalWeight, unitSystem)
    );

    const hydrationPercentage = this.calculateHydrationPercentage(
      recipe.ingredients
    );
    const saltPercentage = this.calculateSaltPercentage(recipe.ingredients);

    return {
      totalWeight,
      breadWeight: recipe.breadWeight,
      quantity: desiredQuantity,
      ingredients: calculatedIngredients,
      hydrationPercentage,
      saltPercentage,
      unitSystem,
    };
  }

  // Legacy method for backward compatibility
  static calculateRecipe(
    recipe: Recipe,
    scaleFactor: number = 1,
    unitSystem: UnitSystem = UnitSystem.METRIC
  ): RecipeCalculation {
    const scaledTotalWeight = recipe.totalDoughWeight * scaleFactor;
    const quantity = Math.round(scaledTotalWeight / recipe.breadWeight);

    const calculatedIngredients = recipe.ingredients.map((ingredient) =>
      this.calculateIngredient(ingredient, scaledTotalWeight, unitSystem)
    );

    const hydrationPercentage = this.calculateHydrationPercentage(
      recipe.ingredients
    );
    const saltPercentage = this.calculateSaltPercentage(recipe.ingredients);

    return {
      totalWeight: scaledTotalWeight,
      breadWeight: recipe.breadWeight,
      quantity,
      ingredients: calculatedIngredients,
      hydrationPercentage,
      saltPercentage,
      unitSystem,
    };
  }

  private static calculateIngredient(
    ingredient: Ingredient,
    totalWeight: number,
    unitSystem: UnitSystem
  ): CalculatedIngredient {
    // Calculate base amount in grams
    const calculatedAmountInGrams = (ingredient.percentage / 100) * totalWeight;

    // Convert to appropriate display unit for the unit system
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

  private static formatNumberWithCommas(number: number): string {
    // Custom implementation for React Native
    const numStr = number.toString();
    const parts = numStr.split(".");

    // Add dots as thousand separators to the integer part
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    // Join with comma for decimal separator
    return parts.join(",");
  }

  static calculateHydrationPercentage(ingredients: Ingredient[]): number {
    const flourWeight = ingredients
      .filter((ing) => ing.category === IngredientCategory.FLOUR)
      .reduce((sum, ing) => sum + ing.percentage, 0);

    // Look for water specifically by name, regardless of category
    const waterWeight = ingredients
      .filter((ing) => {
        const name = ing.name.toLowerCase();
        return (
          name.includes("água") ||
          name.includes("agua") ||
          name.includes("water")
        );
      })
      .reduce((sum, ing) => sum + ing.percentage, 0);

    return flourWeight > 0 ? (waterWeight / flourWeight) * 100 : 0;
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

  static calculateTotalDoughWeight(calculation: RecipeCalculation): number {
    // Sum all ingredient weights to get total dough weight
    return calculation.ingredients.reduce((total, ingredient) => {
      return total + ingredient.calculatedAmount;
    }, 0);
  }

  static calculateDoughWeightPerBread(calculation: RecipeCalculation): number {
    // Calculate total dough weight and divide by quantity
    const totalDoughWeight = this.calculateTotalDoughWeight(calculation);
    return totalDoughWeight / calculation.quantity;
  }

  static formatAmount(amount: number, unit: MeasurementUnit): string {
    const roundedAmount = this.roundToAppropriateDecimalPlaces(amount);

    // Handle fractional amounts for common cooking units
    if (
      unit === MeasurementUnit.CUPS ||
      unit === MeasurementUnit.TEASPOONS ||
      unit === MeasurementUnit.TABLESPOONS
    ) {
      return this.formatAsFraction(roundedAmount);
    }

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

  private static formatAsFraction(amount: number): string {
    const tolerance = 0.1;
    const commonFractions = [
      { decimal: 0.125, fraction: "⅛" },
      { decimal: 0.25, fraction: "¼" },
      { decimal: 0.333, fraction: "⅓" },
      { decimal: 0.5, fraction: "½" },
      { decimal: 0.666, fraction: "⅔" },
      { decimal: 0.75, fraction: "¾" },
    ];

    const wholeNumber = Math.floor(amount);
    const remainder = amount - wholeNumber;

    // Check if remainder matches a common fraction
    for (const { decimal, fraction } of commonFractions) {
      if (Math.abs(remainder - decimal) < tolerance) {
        return wholeNumber > 0 ? `${wholeNumber} ${fraction}` : fraction;
      }
    }

    // If no fraction match, return decimal
    return amount.toString();
  }

  static formatPercentage(percentage: number): string {
    return `${percentage.toFixed(1)}%`;
  }

  static scaleRecipe(recipe: Recipe, newTotalWeight: number): Recipe {
    const originalWeight = recipe.totalDoughWeight;
    const scaleFactor = newTotalWeight / originalWeight;

    return {
      ...recipe,
      totalDoughWeight: newTotalWeight,
      // Percentages remain the same, only total weight changes
    };
  }

  static convertWeight(
    weight: number,
    fromUnit: UnitSystem,
    toUnit: UnitSystem
  ): number {
    if (fromUnit === toUnit) return weight;

    if (fromUnit === UnitSystem.METRIC && toUnit === UnitSystem.IMPERIAL) {
      // Convert grams to ounces
      return weight / UNIT_CONVERSIONS[MeasurementUnit.OUNCES];
    } else {
      // Convert ounces to grams
      return weight * UNIT_CONVERSIONS[MeasurementUnit.OUNCES];
    }
  }

  static getUnitSystemLabel(unitSystem: UnitSystem): string {
    return unitSystem === UnitSystem.METRIC ? "Métrico" : "Imperial";
  }

  static getWeightUnitForSystem(unitSystem: UnitSystem): MeasurementUnit {
    return unitSystem === UnitSystem.METRIC
      ? MeasurementUnit.GRAMS
      : MeasurementUnit.OUNCES;
  }

  static formatBreadWeight(weight: number, unitSystem: UnitSystem): string {
    if (unitSystem === UnitSystem.METRIC && weight >= 1000) {
      // Convert to kilograms for weights >= 1000g
      const weightInKg = weight / 1000;
      const roundedWeight = this.roundToAppropriateDecimalPlaces(weightInKg);
      return `${this.formatNumberWithCommas(roundedWeight)}kg`;
    }

    const unit = this.getWeightUnitForSystem(unitSystem);
    const displayWeight =
      unitSystem === UnitSystem.IMPERIAL
        ? this.convertWeight(weight, UnitSystem.METRIC, UnitSystem.IMPERIAL)
        : weight;

    return this.formatAmount(displayWeight, unit);
  }

  static formatTotalDoughWeight(calculation: RecipeCalculation): string {
    const totalDoughWeight = this.calculateTotalDoughWeight(calculation);
    return this.formatBreadWeight(totalDoughWeight, calculation.unitSystem);
  }

  static formatDoughWeightPerBread(calculation: RecipeCalculation): string {
    const doughWeightPerBread = this.calculateDoughWeightPerBread(calculation);
    return this.formatBreadWeight(doughWeightPerBread, calculation.unitSystem);
  }

  static calculateTotalFlourWeight(calculation: RecipeCalculation): number {
    // Sum all flour ingredient weights
    return calculation.ingredients
      .filter((ingredient) => ingredient.category === IngredientCategory.FLOUR)
      .reduce((total, ingredient) => total + ingredient.calculatedAmount, 0);
  }

  static calculateFlourWeightPerBread(calculation: RecipeCalculation): number {
    // Calculate total flour weight and divide by quantity
    const totalFlourWeight = this.calculateTotalFlourWeight(calculation);
    return totalFlourWeight / calculation.quantity;
  }

  static formatTotalFlourWeight(calculation: RecipeCalculation): string {
    const totalFlourWeight = this.calculateTotalFlourWeight(calculation);
    return this.formatBreadWeight(totalFlourWeight, calculation.unitSystem);
  }

  static formatFlourWeightPerBread(calculation: RecipeCalculation): string {
    const flourWeightPerBread = this.calculateFlourWeightPerBread(calculation);
    return this.formatBreadWeight(flourWeightPerBread, calculation.unitSystem);
  }

  static getBreadInfo(recipe: Recipe, unitSystem: UnitSystem): string {
    const weightDisplay = this.formatBreadWeight(
      recipe.breadWeight,
      unitSystem
    );
    // const quantityDisplay =
    //   recipe.defaultQuantity === 1 ? "pão" : `${recipe.defaultQuantity} pães`;

    return `${weightDisplay} de farinha`;
  }
}

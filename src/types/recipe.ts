export interface Ingredient {
  name: string;
  percentage: number; // Percentage relative to total dough weight
  unit: MeasurementUnit;
  category: IngredientCategory;
}

export type RecipeType = "bread" | "pizza" | "special";

export interface Recipe {
  id: string;
  name: string;
  recipeType: RecipeType;
  description: string;
  image: any;
  totalDoughWeight: number; // in grams (base unit for original recipe)
  breadWeight: number; // Weight of individual bread in grams or pizza disc in grams
  defaultQuantity: number; // Default number of breads/pizzas this recipe makes
  ingredients: Ingredient[];
  instructions: string;
  time: string;
  difficultyLevel: string;
  cuisine?: string;
  location?: string;
  ratings?: string;
  options?: RecipeOption[];
  // Pizza specific properties
  defaultHydration?: number; // Default hydration percentage for pizza dough
  defaultDiscWeight?: number; // Default weight of pizza disc in grams
  minHydration?: number; // Minimum allowed hydration (default 40%)
  maxHydration?: number; // Maximum allowed hydration (default 100%)
}

export enum MeasurementUnit {
  // Metric units
  GRAMS = "g",
  KILOGRAMS = "kg",
  MILLILITERS = "ml",
  LITERS = "l",

  // Imperial units
  OUNCES = "oz",
  POUNDS = "lb",
  FLUID_OUNCES = "fl oz",
  CUPS = "cups",

  // Common units (both systems)
  TEASPOONS = "tsp",
  TABLESPOONS = "tbsp",
  PIECES = "pcs",
  PINCH = "pinch",
}

export enum UnitSystem {
  METRIC = "metric",
  IMPERIAL = "imperial",
}

export enum IngredientCategory {
  FLOUR = "flour",
  LIQUID = "liquid",
  LEAVENING = "leavening",
  SALT = "salt",
  SWEETENER = "sweetener",
  FAT = "fat",
  ADDITIVE = "additive",
  OTHER = "other",
}

export interface CalculatedIngredient extends Ingredient {
  calculatedAmount: number;
  displayUnit: MeasurementUnit;
  displayAmount: number;
}

export interface RecipeCalculation {
  totalWeight: number;
  breadWeight: number;
  quantity: number;
  ingredients: CalculatedIngredient[];
  hydrationPercentage: number;
  saltPercentage: number;
  unitSystem: UnitSystem;
}

export interface RecipeOption {
  id: string;
  label: string;
  value: string;
}

// Unit conversion factors (to grams/ml as base)
export const UNIT_CONVERSIONS: Record<MeasurementUnit, number> = {
  // Metric (base units)
  [MeasurementUnit.GRAMS]: 1,
  [MeasurementUnit.KILOGRAMS]: 1000,
  [MeasurementUnit.MILLILITERS]: 1, // 1ml ≈ 1g for water
  [MeasurementUnit.LITERS]: 1000,

  // Imperial
  [MeasurementUnit.OUNCES]: 28.35,
  [MeasurementUnit.POUNDS]: 453.59,
  [MeasurementUnit.FLUID_OUNCES]: 29.57,
  [MeasurementUnit.CUPS]: 240, // US cup

  // Common
  [MeasurementUnit.TEASPOONS]: 5,
  [MeasurementUnit.TABLESPOONS]: 15,
  [MeasurementUnit.PIECES]: 1,
  [MeasurementUnit.PINCH]: 0.5,
};

// Preferred units for each system
export const PREFERRED_UNITS: Record<
  UnitSystem,
  Record<IngredientCategory, MeasurementUnit[]>
> = {
  [UnitSystem.METRIC]: {
    [IngredientCategory.FLOUR]: [
      MeasurementUnit.GRAMS,
      MeasurementUnit.KILOGRAMS,
    ],
    [IngredientCategory.LIQUID]: [
      MeasurementUnit.GRAMS,
      MeasurementUnit.KILOGRAMS,
    ],
    [IngredientCategory.LEAVENING]: [
      MeasurementUnit.GRAMS,
      MeasurementUnit.TEASPOONS,
    ],
    [IngredientCategory.SALT]: [
      MeasurementUnit.GRAMS,
      MeasurementUnit.TEASPOONS,
    ],
    [IngredientCategory.SWEETENER]: [
      MeasurementUnit.GRAMS,
      MeasurementUnit.TABLESPOONS,
    ],
    [IngredientCategory.FAT]: [
      MeasurementUnit.GRAMS,
      MeasurementUnit.MILLILITERS,
    ],
    [IngredientCategory.ADDITIVE]: [
      MeasurementUnit.GRAMS,
      MeasurementUnit.TEASPOONS,
    ],
    [IngredientCategory.OTHER]: [MeasurementUnit.GRAMS, MeasurementUnit.PIECES],
  },
  [UnitSystem.IMPERIAL]: {
    [IngredientCategory.FLOUR]: [
      MeasurementUnit.OUNCES,
      MeasurementUnit.POUNDS,
      MeasurementUnit.CUPS,
    ],
    [IngredientCategory.LIQUID]: [
      MeasurementUnit.FLUID_OUNCES,
      MeasurementUnit.CUPS,
    ],
    [IngredientCategory.LEAVENING]: [
      MeasurementUnit.TEASPOONS,
      MeasurementUnit.OUNCES,
    ],
    [IngredientCategory.SALT]: [
      MeasurementUnit.TEASPOONS,
      MeasurementUnit.OUNCES,
    ],
    [IngredientCategory.SWEETENER]: [
      MeasurementUnit.TABLESPOONS,
      MeasurementUnit.OUNCES,
    ],
    [IngredientCategory.FAT]: [
      MeasurementUnit.OUNCES,
      MeasurementUnit.TABLESPOONS,
    ],
    [IngredientCategory.ADDITIVE]: [
      MeasurementUnit.TEASPOONS,
      MeasurementUnit.OUNCES,
    ],
    [IngredientCategory.OTHER]: [
      MeasurementUnit.OUNCES,
      MeasurementUnit.PIECES,
    ],
  },
};

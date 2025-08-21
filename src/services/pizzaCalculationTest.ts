import {
  IngredientCategory,
  MeasurementUnit,
  Recipe,
  UnitSystem,
} from "../types/recipe";
import { PizzaCalculationService } from "./pizzaCalculationService";

// Mock recipes for testing
const neapolitanPizza: Recipe = {
  id: "test-neapolitan",
  name: "Test Neapolitan Pizza",
  recipeType: "pizza",
  description: "Test pizza for calculation",
  image: null,
  totalDoughWeight: 800,
  breadWeight: 200,
  defaultQuantity: 4,
  defaultHydration: 65,
  defaultDiscWeight: 300,
  minHydration: 55,
  maxHydration: 75,
  pizzaType: "neapolitan",
  time: "2-3 hours",
  difficultyLevel: "Medium",
  ingredients: [
    {
      name: "Flour",
      percentage: 100,
      unit: MeasurementUnit.GRAMS,
      category: IngredientCategory.FLOUR,
    },
    {
      name: "Water",
      percentage: 65,
      unit: MeasurementUnit.MILLILITERS,
      category: IngredientCategory.LIQUID,
    },
    {
      name: "Salt",
      percentage: 2.5,
      unit: MeasurementUnit.GRAMS,
      category: IngredientCategory.SALT,
    },
    {
      name: "Yeast",
      percentage: 0.2,
      unit: MeasurementUnit.GRAMS,
      category: IngredientCategory.LEAVENING,
    },
  ],
  instructions: "Test instructions",
};

const newYorkPizza: Recipe = {
  id: "test-ny",
  name: "Test New York Pizza",
  recipeType: "pizza",
  description: "Test NY style pizza for calculation",
  image: null,
  totalDoughWeight: 800,
  breadWeight: 200,
  defaultQuantity: 4,
  defaultHydration: 62,
  defaultDiscWeight: 300,
  minHydration: 55,
  maxHydration: 70,
  pizzaType: "ny",
  time: "2-3 hours",
  difficultyLevel: "Medium",
  ingredients: [
    {
      name: "Flour",
      percentage: 100,
      unit: MeasurementUnit.GRAMS,
      category: IngredientCategory.FLOUR,
    },
    {
      name: "Water",
      percentage: 62,
      unit: MeasurementUnit.MILLILITERS,
      category: IngredientCategory.LIQUID,
    },
    {
      name: "Salt",
      percentage: 2.2,
      unit: MeasurementUnit.GRAMS,
      category: IngredientCategory.SALT,
    },
    {
      name: "Yeast",
      percentage: 0.76,
      unit: MeasurementUnit.GRAMS,
      category: IngredientCategory.LEAVENING,
    },
    {
      name: "Oil",
      percentage: 3,
      unit: MeasurementUnit.MILLILITERS,
      category: IngredientCategory.FAT,
    },
    {
      name: "Sugar",
      percentage: 1,
      unit: MeasurementUnit.GRAMS,
      category: IngredientCategory.SWEETENER,
    },
  ],
  instructions: "Test instructions",
};

// Test function to run calculations and log results
function testPizzaCalculations() {
  console.log("=== TESTING NEAPOLITAN PIZZA CALCULATION ===");
  const neapolitanResult = PizzaCalculationService.calculatePizzaRecipe(
    neapolitanPizza,
    4, // pizzaCount
    300, // discWeight
    65, // hydrationPercentage
    UnitSystem.METRIC,
    "fresh" // yeastType
  );

  console.log("Total dough weight:", neapolitanResult.totalWeight, "g");
  console.log("Ingredients:");
  neapolitanResult.ingredients.forEach((ing) => {
    console.log(
      `- ${ing.name}: ${ing.displayAmount}${
        ing.displayUnit
      } (${ing.calculatedAmount.toFixed(2)}g)`
    );
  });

  console.log("\n=== TESTING NEW YORK PIZZA CALCULATION ===");
  const nyResult = PizzaCalculationService.calculatePizzaRecipe(
    newYorkPizza,
    4, // pizzaCount
    300, // discWeight
    62, // hydrationPercentage
    UnitSystem.METRIC,
    "fresh" // yeastType
  );

  console.log("Total dough weight:", nyResult.totalWeight, "g");
  console.log("Ingredients:");
  nyResult.ingredients.forEach((ing) => {
    console.log(
      `- ${ing.name}: ${ing.displayAmount}${
        ing.displayUnit
      } (${ing.calculatedAmount.toFixed(2)}g)`
    );
  });

  // Test with dry yeast
  console.log("\n=== TESTING NEW YORK PIZZA WITH DRY YEAST ===");
  const nyDryYeastResult = PizzaCalculationService.calculatePizzaRecipe(
    newYorkPizza,
    4, // pizzaCount
    300, // discWeight
    62, // hydrationPercentage
    UnitSystem.METRIC,
    "dry" // yeastType
  );

  console.log("Total dough weight:", nyDryYeastResult.totalWeight, "g");
  console.log("Ingredients:");
  nyDryYeastResult.ingredients.forEach((ing) => {
    console.log(
      `- ${ing.name}: ${ing.displayAmount}${
        ing.displayUnit
      } (${ing.calculatedAmount.toFixed(2)}g)`
    );
  });
}

// Run the test
testPizzaCalculations();

// Export the test function for potential use elsewhere
export { testPizzaCalculations };

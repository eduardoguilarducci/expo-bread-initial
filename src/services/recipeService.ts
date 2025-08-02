import { getAllRecipes, getRecipeById } from "../data/mockRecipes";
import { Recipe } from "../types/recipe";

export class RecipeService {
  static async getFeaturedRecipes(): Promise<Recipe[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const allRecipes = getAllRecipes();
        const featuredRecipes = allRecipes.filter(
          (r) => r.recipeType === "bread"
        );
        resolve(featuredRecipes);
      }, 100);
    });
  }

  static async getAllRecipes(): Promise<Recipe[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getAllRecipes());
      }, 100);
    });
  }

  static async searchRecipes(query: string): Promise<Recipe[]> {
    const allRecipes = await this.getAllRecipes();

    return allRecipes.filter(
      (recipe) =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.description.toLowerCase().includes(query.toLowerCase()) ||
        (recipe.location &&
          recipe.location.toLowerCase().includes(query.toLowerCase()))
    );
  }

  static async getRecipeById(id: string): Promise<Recipe | null> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getRecipeById(id) || null);
      }, 100);
    });
  }

  static async getRecipesByType(type: string): Promise<Recipe[]> {
    const allRecipes = await this.getAllRecipes();
    return allRecipes.filter((recipe) => recipe.recipeType === type);
  }
}

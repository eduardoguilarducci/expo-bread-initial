import { getAllRecipes, getRecipeById } from "../data/mockRecipes";
import {
  getAllRestaurants,
  getFeaturedRestaurants,
} from "../data/mockRestaurants";
import { Recipe } from "../types/recipe";
import { Restaurant } from "../types/restaurant";

export class RestaurantService {
  static async getFeaturedRestaurants(): Promise<Restaurant[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getFeaturedRestaurants());
      }, 100);
    });
  }

  static async getAllRestaurants(): Promise<Restaurant[]> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getAllRestaurants());
      }, 100);
    });
  }

  static async searchRestaurants(query: string): Promise<Restaurant[]> {
    // Simulate search functionality
    const allRestaurants = await this.getAllRestaurants();
    const featuredRestaurants = await this.getFeaturedRestaurants();
    const allData = [...featuredRestaurants, ...allRestaurants];

    return allData.filter(
      (restaurant) =>
        restaurant.name.toLowerCase().includes(query.toLowerCase()) ||
        restaurant.location.toLowerCase().includes(query.toLowerCase())
    );
  }

  static async getRestaurantById(id: string): Promise<Restaurant | null> {
    const allRestaurants = await this.getAllRestaurants();
    const featuredRestaurants = await this.getFeaturedRestaurants();
    const allData = [...featuredRestaurants, ...allRestaurants];

    return allData.find((restaurant) => restaurant.id === id) || null;
  }

  // Recipe methods
  static async getRecipeById(id: string): Promise<Recipe | null> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(getRecipeById(id) || null);
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
        recipe.location.toLowerCase().includes(query.toLowerCase())
    );
  }
}

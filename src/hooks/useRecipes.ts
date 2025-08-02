import { useEffect, useState } from "react";
import { getAllRecipes } from "../data/mockRecipes";
import { Recipe } from "../types/recipe";

interface UseRecipesReturn {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
  searchRecipes: (query: string) => Promise<Recipe[]>;
  refreshData: () => Promise<void>;
}

export const useRecipes = (): UseRecipesReturn => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const allRecipes = getAllRecipes();
      setRecipes(allRecipes);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load recipes");
    } finally {
      setLoading(false);
    }
  };

  const searchRecipes = async (query: string): Promise<Recipe[]> => {
    try {
      const allRecipes = getAllRecipes();
      return allRecipes.filter(
        (recipe) =>
          recipe.name.toLowerCase().includes(query.toLowerCase()) ||
          recipe.description.toLowerCase().includes(query.toLowerCase()) ||
          (recipe.location &&
            recipe.location.toLowerCase().includes(query.toLowerCase()))
      );
    } catch (err) {
      setError(err instanceof Error ? err.message : "Search failed");
      return [];
    }
  };

  const refreshData = async () => {
    await loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    recipes,
    loading,
    error,
    searchRecipes,
    refreshData,
  };
};

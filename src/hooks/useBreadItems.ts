import { useCallback, useEffect, useState } from "react";
import { getAllRecipes } from "../data/mockRecipes";
import { Recipe } from "../types/recipe";
import { BreadItem } from "../types/restaurant";

interface UseBreadItemsReturn {
  featuredBreadItems: BreadItem[];
  allBreadItems: BreadItem[];
  loading: boolean;
  error: string | null;
  searchBreadItems: (query: string) => Promise<BreadItem[]>;
  refreshData: () => Promise<void>;
}

export const useBreadItems = (): UseBreadItemsReturn => {
  const [featuredBreadItems, setFeaturedBreadItems] = useState<BreadItem[]>([]);
  const [allBreadItems, setAllBreadItems] = useState<BreadItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const convertRecipeToBreadItem = (recipe: Recipe): BreadItem => ({
    id: recipe.id,
    name: recipe.name,
    location: recipe.location || "Local não especificado",
    difficultyLevel: recipe.difficultyLevel,
    time: recipe.time,
    showAtHomeScreen: true,
    image: recipe.image,
    cuisine: recipe.cuisine,
    ratings: recipe.ratings,
  });

  const loadData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const allRecipes = getAllRecipes();
      const breadRecipes = allRecipes.filter(
        (recipe) => recipe.recipeType === "bread"
      );

      const breadItems = breadRecipes.map(convertRecipeToBreadItem);
      const featuredItems = breadItems.filter((item) => item.showAtHomeScreen);
      const allItems = breadItems.slice(2); // Skip first 2 items to match original behavior

      setFeaturedBreadItems(featuredItems);
      setAllBreadItems(allItems);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load bread items"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  const searchBreadItems = async (query: string): Promise<BreadItem[]> => {
    try {
      const allRecipes = getAllRecipes();
      const breadRecipes = allRecipes.filter(
        (recipe) => recipe.recipeType === "bread"
      );
      const breadItems = breadRecipes.map(convertRecipeToBreadItem);

      return breadItems.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.location.toLowerCase().includes(query.toLowerCase())
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
  }, [loadData]);

  return {
    featuredBreadItems,
    allBreadItems,
    loading,
    error,
    searchBreadItems,
    refreshData,
  };
};

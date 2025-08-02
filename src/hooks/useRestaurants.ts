import { useEffect, useState } from "react";
import { RestaurantService } from "../services/restaurantService";
import { Restaurant } from "../types/restaurant";

interface UseRestaurantsReturn {
  featuredRestaurants: Restaurant[];
  allRestaurants: Restaurant[];
  loading: boolean;
  error: string | null;
  searchRestaurants: (query: string) => Promise<Restaurant[]>;
  refreshData: () => Promise<void>;
}

export const useRestaurants = (): UseRestaurantsReturn => {
  const [featuredRestaurants, setFeaturedRestaurants] = useState<Restaurant[]>(
    []
  );
  const [allRestaurants, setAllRestaurants] = useState<Restaurant[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [featured, all] = await Promise.all([
        RestaurantService.getFeaturedRestaurants(),
        RestaurantService.getAllRestaurants(),
      ]);

      setFeaturedRestaurants(featured);
      setAllRestaurants(all);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to load restaurants"
      );
    } finally {
      setLoading(false);
    }
  };

  const searchRestaurants = async (query: string): Promise<Restaurant[]> => {
    try {
      return await RestaurantService.searchRestaurants(query);
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
    featuredRestaurants,
    allRestaurants,
    loading,
    error,
    searchRestaurants,
    refreshData,
  };
};

export interface Restaurant {
  id: string;
  name: string;
  location: string;
  difficultyLevel: string;
  time: string;
  showAtHomeScreen: boolean;
  image: any; // TODO: Replace with proper image type
  cuisine?: string;
  ratings?: string;
}

export interface RestaurantCardProps {
  restaurant: Restaurant;
  style?: any;
  variant?: "featured" | "list";
  sizeMultiplier?: number;
  imageHeight?: number;
}

export interface RestaurantSection {
  title: string;
  restaurants: Restaurant[];
  showSeeAll?: boolean;
}

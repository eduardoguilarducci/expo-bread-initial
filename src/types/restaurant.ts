export interface BreadItem {
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

export interface SmallCardProps {
  restaurant: BreadItem;
  style?: any;
  variant?: "featured" | "list";
  sizeMultiplier?: number;
  imageHeight?: number;
}

export interface BreadSection {
  title: string;
  restaurants: BreadItem[];
  showSeeAll?: boolean;
}

import { ThemedText } from "@/src/components/ui/ThemedText";
import { Recipe } from "@/src/types/recipe";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface RecipeCarouselProps {
  recipes: Recipe[];
  title: string;
  onRecipePress?: (recipe: Recipe) => void;
}

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = screenWidth * 0.6;
const CARD_HEIGHT = 280; // Increased from 200 to 280 to accommodate all content

export const RecipeCarousel: React.FC<RecipeCarouselProps> = ({
  recipes,
  title,
  onRecipePress,
}) => {
  // Helper to get difficulty color based on text
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "fácil":
      case "easy":
        return "#E8F5E8"; // Light green for easy
      case "médio":
      case "median":
        return "#FFF8DC"; // Light yellow for medium
      case "difícil":
      case "hard":
        return "#FFE6E6"; // Light red to show difficulty
      default:
        return "#F5F5F5"; // Light gray for unknown
    }
  };

  if (recipes.length === 0) {
    return (
      <View style={styles.container}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <View style={styles.emptyContainer}>
          <ThemedText style={styles.emptyText}>
            Receitas não disponíveis
          </ThemedText>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
        decelerationRate="normal"
        snapToInterval={CARD_WIDTH + 16}
        snapToAlignment="start"
      >
        {recipes.map((recipe) => (
          <AnimatedRecipeCard
            key={recipe.id}
            recipe={recipe}
            onPress={() => onRecipePress?.(recipe)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

// Separate animated component for better performance
const AnimatedRecipeCard: React.FC<{
  recipe: Recipe;
  onPress: () => void;
}> = ({ recipe, onPress }) => {
  const scale = useRef(new Animated.Value(1)).current;
  const rotate = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "fácil":
      case "easy":
        return "#E8F5E8";
      case "médio":
      case "median":
        return "#FFF8DC";
      case "difícil":
      case "hard":
        return "#FFE6E6";
      default:
        return "#F5F5F5";
    }
  };

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.92,
        useNativeDriver: true,
        speed: 60,
        bounciness: 15,
      }),
      Animated.spring(rotate, {
        toValue: 1,
        useNativeDriver: true,
        speed: 80,
        bounciness: 20,
      }),
      Animated.spring(translateY, {
        toValue: -8,
        useNativeDriver: true,
        speed: 50,
        bounciness: 12,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 40,
        bounciness: 10,
      }),
      Animated.spring(rotate, {
        toValue: 0,
        useNativeDriver: true,
        speed: 60,
        bounciness: 15,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        speed: 30,
        bounciness: 8,
      }),
    ]).start();
  };

  const rotateInterpolate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "2deg"],
  });

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={onPress}
      activeOpacity={1}
      style={styles.cardContainer}
    >
      <Animated.View
        style={[
          styles.recipeCard,
          {
            transform: [
              { scale },
              { rotate: rotateInterpolate },
              { translateY },
            ],
          },
        ]}
      >
        <Image source={recipe.image} style={styles.recipeImage} />
        <View style={styles.recipeInfo}>
          <View style={styles.contentSection}>
            <ThemedText style={styles.recipeName} numberOfLines={2}>
              {recipe.name}
            </ThemedText>
            <ThemedText style={styles.recipeDescription} numberOfLines={3}>
              {recipe.description}
            </ThemedText>
          </View>
          <View style={styles.recipeMeta}>
            <View
              style={[
                styles.difficultyBadge,
                {
                  backgroundColor: getDifficultyColor(recipe.difficultyLevel),
                },
              ]}
            >
              <Text style={styles.difficultyText}>
                {recipe.difficultyLevel}
              </Text>
            </View>
            <Text style={styles.timeText}>🕒 {recipe.time}</Text>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0, // Removed margin to bring sections directly together
    paddingLeft: 16, // Add left padding to align with other content
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginLeft: 0,
    marginBottom: 2, // Reduced from 8 to bring title even closer to bread recipes
  },
  scrollContainer: {
    paddingRight: 16,
    paddingLeft: 0, // Ensure no extra left padding in scroll container
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 8,
  },
  cardContainer: {
    marginRight: 16,
  },
  recipeCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
    overflow: "hidden",
  },
  recipeImage: {
    width: "100%",
    height: 140, // Increased from 120 to 140 for better image proportion
    resizeMode: "cover",
  },
  recipeInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "space-between",
  },
  contentSection: {
    flex: 1,
    marginBottom: 8,
  },
  recipeName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 6,
    lineHeight: 20,
  },
  recipeDescription: {
    fontSize: 12,
    color: "#666",
    lineHeight: 16,
    flex: 1,
  },
  recipeMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  difficultyBadge: {
    borderRadius: 4,
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  difficultyText: {
    color: "#1A1A1A",
    fontWeight: "600",
    fontSize: 9,
  },
  timeText: {
    fontSize: 11,
    color: "#444",
  },
  emptyContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    marginHorizontal: 16,
    borderRadius: 8,
  },
  emptyText: {
    fontSize: 16,
    color: "#999",
    textAlign: "center",
  },
});

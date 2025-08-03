import { ThemedText } from "@/src/components/ui/ThemedText";
import { Recipe } from "@/src/types/recipe";
import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface SpecialRecipeCardProps {
  recipe: Recipe;
  onPress?: (recipe: Recipe) => void;
  layout?: "horizontal" | "vertical" | "mixed";
}

const { width: screenWidth } = Dimensions.get("window");
const CARD_WIDTH = screenWidth - 32; // Full width minus padding
const CARD_HEIGHT = 200;

export const SpecialRecipeCard: React.FC<SpecialRecipeCardProps> = ({
  recipe,
  onPress,
  layout = "horizontal",
}) => {
  const scale = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "fácil":
      case "easy":
        return "#4CAF50";
      case "médio":
      case "medium":
        return "#FF9800";
      case "difícil":
      case "hard":
        return "#F44336";
      default:
        return "#9E9E9E";
    }
  };

  const getDifficultyTextColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "fácil":
      case "easy":
        return "#FFFFFF";
      case "médio":
      case "median":
        return "#FFFFFF";
      case "difícil":
      case "hard":
        return "#FFFFFF";
      default:
        return "#FFFFFF";
    }
  };

  const handlePressIn = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 0.98,
        useNativeDriver: true,
        speed: 80,
        bounciness: 8,
      }),
      Animated.spring(translateY, {
        toValue: -2,
        useNativeDriver: true,
        speed: 60,
        bounciness: 6,
      }),
    ]).start();
  };

  const handlePressOut = () => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
        speed: 60,
        bounciness: 6,
      }),
      Animated.spring(translateY, {
        toValue: 0,
        useNativeDriver: true,
        speed: 40,
        bounciness: 4,
      }),
    ]).start();
  };

  if (layout === "vertical") {
    return (
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={() => onPress?.(recipe)}
        activeOpacity={1}
        style={styles.verticalCardContainer}
      >
        <Animated.View
          style={[
            styles.verticalCard,
            {
              transform: [{ scale }, { translateY }],
            },
          ]}
        >
          <Image source={recipe.image} style={styles.verticalImage} />
          <View style={styles.verticalContent}>
            <View style={styles.verticalHeader}>
              <ThemedText style={styles.verticalTitle} numberOfLines={2}>
                {recipe.name}
              </ThemedText>
              <View
                style={[
                  styles.verticalDifficultyBadge,
                  {
                    backgroundColor: getDifficultyColor(recipe.difficultyLevel),
                  },
                ]}
              >
                <Text
                  style={[
                    styles.verticalDifficultyText,
                    { color: getDifficultyTextColor(recipe.difficultyLevel) },
                  ]}
                >
                  {recipe.difficultyLevel}
                </Text>
              </View>
            </View>
            <ThemedText style={styles.verticalDescription} numberOfLines={3}>
              {recipe.description}
            </ThemedText>
            <View style={styles.verticalMeta}>
              <View style={styles.verticalTimeContainer}>
                <Text style={styles.verticalTimeIcon}>⏱️</Text>
                <Text style={styles.verticalTimeText}>{recipe.time}</Text>
              </View>
              <View style={styles.verticalCuisineContainer}>
                <Text style={styles.verticalCuisineIcon}>🏺</Text>
                <Text style={styles.verticalCuisineText}>{recipe.cuisine}</Text>
              </View>
            </View>
          </View>
        </Animated.View>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={() => onPress?.(recipe)}
      activeOpacity={1}
      style={styles.cardContainer}
    >
      <Animated.View
        style={[
          styles.recipeCard,
          {
            transform: [{ scale }, { translateY }],
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
              <Text
                style={[
                  styles.difficultyText,
                  { color: getDifficultyTextColor(recipe.difficultyLevel) },
                ]}
              >
                {recipe.difficultyLevel}
              </Text>
            </View>
            <View style={styles.timeContainer}>
              <Text style={styles.timeIcon}>⏱️</Text>
              <Text style={styles.timeText}>{recipe.time}</Text>
            </View>
          </View>
        </View>
      </Animated.View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  // Horizontal layout styles
  cardContainer: {
    marginBottom: 16,
  },
  recipeCard: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: "hidden",
  },
  recipeImage: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
  },
  recipeInfo: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  contentSection: {
    flex: 1,
    marginBottom: 12,
  },
  recipeName: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    marginBottom: 8,
    lineHeight: 22,
  },
  recipeDescription: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
    flex: 1,
  },
  recipeMeta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  difficultyBadge: {
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  difficultyText: {
    fontWeight: "600",
    fontSize: 12,
  },
  timeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  timeIcon: {
    fontSize: 14,
  },
  timeText: {
    fontSize: 14,
    color: "#444444",
    fontWeight: "500",
  },

  // Vertical layout styles
  verticalCardContainer: {
    marginBottom: 16,
  },
  verticalCard: {
    width: CARD_WIDTH,
    height: 280,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 8,
    overflow: "hidden",
  },
  verticalImage: {
    width: "100%",
    height: 160,
    resizeMode: "cover",
  },
  verticalContent: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
  },
  verticalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  verticalTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1A1A1A",
    flex: 1,
    marginRight: 12,
    lineHeight: 22,
  },
  verticalDifficultyBadge: {
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  verticalDifficultyText: {
    fontWeight: "600",
    fontSize: 11,
  },
  verticalDescription: {
    fontSize: 14,
    color: "#666666",
    lineHeight: 20,
    marginBottom: 12,
  },
  verticalMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  verticalTimeContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  verticalTimeIcon: {
    fontSize: 14,
  },
  verticalTimeText: {
    fontSize: 14,
    color: "#444444",
    fontWeight: "500",
  },
  verticalCuisineContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  verticalCuisineIcon: {
    fontSize: 14,
  },
  verticalCuisineText: {
    fontSize: 14,
    color: "#666666",
    fontWeight: "500",
  },
});

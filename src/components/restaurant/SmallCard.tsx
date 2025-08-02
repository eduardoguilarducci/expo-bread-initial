import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SmallCardProps } from "../../types/restaurant";
import { ThemedText } from "../ui/ThemedText";

export function SmallCard({
  restaurant: breadItem,
  style,
  variant = "featured",
  sizeMultiplier = 1,
  imageHeight,
}: SmallCardProps) {
  const { image, name, location, difficultyLevel, time, cuisine, ratings } =
    breadItem;

  // Animation
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 30,
      bounciness: 8,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
      speed: 20,
      bounciness: 8,
    }).start();
  };

  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/recipeDetails",
      params: {
        id: breadItem.id,
        name: breadItem.name,
        time: breadItem.time,
        location: breadItem.location,
        difficultyLevel: breadItem.difficultyLevel.toString(),
      },
    });
  };

  // Dynamic sizing
  const cardWidth = 200 * sizeMultiplier;
  const defaultImageHeight = 110 * sizeMultiplier;

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

  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={handlePress}
      style={({ pressed }) => [style, { opacity: pressed ? 0.98 : 1 }]}
    >
      <Animated.View
        style={[
          styles.card,
          variant === "list" && styles.listCard,
          { width: cardWidth, transform: [{ scale }] },
        ]}
      >
        <Image
          source={image}
          style={[
            styles.image,
            {
              height:
                imageHeight !== undefined ? imageHeight : defaultImageHeight,
            },
          ]}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <ThemedText style={styles.name} numberOfLines={2}>
            {name}
          </ThemedText>
          <ThemedText style={styles.location} numberOfLines={1}>
            {location}
          </ThemedText>
          <View style={styles.row}>
            <View
              style={[
                styles.ratingBadge,
                { backgroundColor: getDifficultyColor(difficultyLevel) },
              ]}
            >
              <Text style={[styles.ratingText, { color: "#1A1A1A" }]}>
                {difficultyLevel}
              </Text>
            </View>
            <Text style={styles.meta} numberOfLines={1}>
              🕒 {time}
            </Text>
          </View>

          {variant === "list" && cuisine && (
            <Text style={styles.cuisine}>{cuisine}</Text>
          )}

          {variant === "list" && ratings && (
            <Text style={styles.ratings}>{ratings}</Text>
          )}
        </View>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12, // Reduced from 16 for more compact look
    overflow: "hidden",
    marginRight: 0, // Remove default marginRight to allow grid layout control
    elevation: 8, // Reduced shadow for cleaner look
    shadowColor: "#000",
    shadowOpacity: 0.15, // Reduced shadow opacity
    shadowRadius: 16, // Reduced shadow radius
    shadowOffset: { width: 0, height: 0 }, // Remove shadow offset
    borderWidth: 1,
    borderColor: "#F0F0F0", // Lighter border color
  },
  listCard: {
    width: "100%",
    marginRight: 0,
    marginBottom: 18,
  },
  image: {
    width: "100%",
    height: 110,
  },
  info: {
    padding: 10, // Reduced padding for more compact layout
  },
  name: {
    fontSize: 14, // Reduced from 16 for better fit
    fontWeight: "600", // Changed from bold to semibold
    marginBottom: 2,
    color: "#181818",
    lineHeight: 18, // Added line height for better text rendering
  },
  location: {
    fontSize: 11, // Reduced from 13 for better fit
    color: "#888",
    marginBottom: 6,
    lineHeight: 14, // Added line height
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6, // Reduced gap from 8 to 6
    flexWrap: "wrap",
  },
  ratingBadge: {
    borderRadius: 4, // Reduced from 6
    paddingHorizontal: 5, // Reduced from 6
    paddingVertical: 2,
    marginRight: 4, // Reduced from 6
  },
  ratingText: {
    color: "#fff",
    fontWeight: "600", // Changed from bold to semibold
    fontSize: 9, // Reduced from 10
  },
  meta: {
    fontSize: 11, // Reduced from 13
    color: "#444",
    marginRight: 4, // Reduced from 6
    flex: 1, // Added flex to prevent text overflow
  },
  cuisine: {
    fontSize: 15,
    color: "#888",
    marginTop: 4,
  },
  ratings: {
    fontSize: 14,
    color: "#444",
    marginTop: 2,
  },
});

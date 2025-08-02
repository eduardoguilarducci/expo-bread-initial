import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { BreadSection as BreadSectionType } from "../../types/restaurant";
import { ThemedText } from "../ui/ThemedText";
import { SmallCard } from "./SmallCard";

interface BreadSectionProps {
  section: BreadSectionType;
  onSeeAllPress?: () => void;
  horizontal?: boolean;
}

const SCREEN_WIDTH = Dimensions.get("window").width;
const NUM_COLUMNS = 2;
const HORIZONTAL_PADDING = 16; // Reduced from 24 to 16 for better screen utilization
const CARD_MARGIN = 12; // Horizontal spacing between cards
const CARD_WIDTH =
  (SCREEN_WIDTH - 2 * HORIZONTAL_PADDING - CARD_MARGIN) / NUM_COLUMNS;
const TOTAL_CARDS_WIDTH = CARD_WIDTH * NUM_COLUMNS;
const TOTAL_GAPS_WIDTH = CARD_MARGIN * (NUM_COLUMNS - 1);
const REMAINING_SPACE =
  SCREEN_WIDTH - 2 * HORIZONTAL_PADDING - TOTAL_CARDS_WIDTH - TOTAL_GAPS_WIDTH;
const SIDE_MARGIN = REMAINING_SPACE / 2 - 4; // Shift grid 4px to the left
const CARD_HEIGHT = CARD_WIDTH * 0.6 + 80; // Image height + info section height

export function BreadSection({
  section,
  onSeeAllPress,
  horizontal = false,
}: BreadSectionProps) {
  const isFeaturedGrid = !horizontal; // Show grid when NOT horizontal
  const data = isFeaturedGrid
    ? section.restaurants.filter((r) => r.showAtHomeScreen)
    : section.restaurants;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="subtitle" style={styles.title}>
          {section.title}
        </ThemedText>
        {section.showSeeAll && (
          <TouchableOpacity onPress={onSeeAllPress}>
            <ThemedText style={styles.seeAll}>See all</ThemedText>
          </TouchableOpacity>
        )}
      </View>

      {isFeaturedGrid ? (
        <View style={styles.featuredGrid}>
          {Array.from(
            { length: Math.ceil(data.length / NUM_COLUMNS) },
            (_, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                {data
                  .slice(rowIndex * NUM_COLUMNS, (rowIndex + 1) * NUM_COLUMNS)
                  .map((restaurant, colIndex) => (
                    <View
                      key={restaurant.id}
                      style={[
                        styles.cardContainer,
                        {
                          width: CARD_WIDTH,
                          marginLeft: colIndex === 0 ? 0 : CARD_MARGIN, // Add gap between cards
                        },
                      ]}
                    >
                      <SmallCard
                        restaurant={restaurant}
                        variant="featured"
                        sizeMultiplier={1}
                        style={{ width: "100%", height: CARD_HEIGHT }}
                        imageHeight={CARD_WIDTH * 0.6}
                      />
                    </View>
                  ))}
              </View>
            )
          )}
        </View>
      ) : (
        <View style={styles.verticalList}>
          {data.map((restaurant) => (
            <View key={restaurant.id}>
              <SmallCard restaurant={restaurant} variant="list" />
              {restaurant.cuisine && (
                <ThemedText style={styles.cuisine}>
                  {restaurant.cuisine}
                </ThemedText>
              )}
            </View>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12, // Increased from 8 to 12 for better spacing
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
  },
  seeAll: {
    color: "#2ECC71",
    fontWeight: "500",
    fontSize: 16,
  },
  featuredGrid: {
    paddingHorizontal: HORIZONTAL_PADDING, // Restore padding for fluid layout
    alignItems: "center", // Center the grid for symmetry
  },
  verticalList: {
    paddingHorizontal: 16,
  },
  cuisine: {
    fontSize: 15,
    color: "#888",
    marginTop: 4,
    marginLeft: 4,
  },
  cardContainer: {
    marginBottom: 0,
    marginTop: 0,
    marginVertical: 0,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start", // Start from left
    width: "100%", // Ensure full width
    marginTop: 0,
    marginVertical: 0,
    marginBottom: 12, // Add fluid spacing between rows
    paddingLeft: SIDE_MARGIN - 4, // Reduce left padding to shift left
    paddingRight: SIDE_MARGIN + 4, // Increase right padding to compensate
  },
});

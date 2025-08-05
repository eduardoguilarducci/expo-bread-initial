import React from "react";
import {
  Dimensions,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
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
const HORIZONTAL_PADDING = 16;
const CARD_MARGIN = Platform.OS === "android" ? 2 : 4;
const CARD_WIDTH =
  (SCREEN_WIDTH - 2 * HORIZONTAL_PADDING - CARD_MARGIN) / NUM_COLUMNS;
const CARD_HEIGHT = CARD_WIDTH * 0.6 + 80;

export function BreadSection({
  section,
  onSeeAllPress,
  horizontal = false,
}: BreadSectionProps) {
  const isFeaturedGrid = !horizontal;
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
        <FlatList
          data={data}
          numColumns={NUM_COLUMNS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.cardContainer}>
              <SmallCard
                restaurant={item}
                variant="featured"
                sizeMultiplier={1}
                style={{ width: "100%", height: CARD_HEIGHT }}
                imageHeight={CARD_WIDTH * 0.6}
              />
            </View>
          )}
          contentContainerStyle={styles.gridContainer}
          columnWrapperStyle={styles.row}
          scrollEnabled={false}
          showsVerticalScrollIndicator={false}
        />
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
    marginBottom: 12,
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
  gridContainer: {
    paddingHorizontal: Platform.OS === "android" ? 2 : 8,
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
    flex: 1,
    margin: Platform.OS === "android" ? 1 : 4,
  },
  row: {
    justifyContent: "space-between",
  },
});

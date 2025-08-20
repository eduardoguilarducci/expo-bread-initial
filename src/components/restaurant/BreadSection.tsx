import React from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { BreadSection as BreadSectionType } from "../../types/restaurant";
import { ThemedText } from "../ui/ThemedText";
import { SmallCard } from "./SmallCard";

interface BreadSectionProps {
  section: BreadSectionType;
  onSeeAllPress?: () => void;
  horizontal?: boolean;
}

const HORIZONTAL_PADDING = 16;
const NUM_COLUMNS = 2;

export function BreadSection({
  section,
  onSeeAllPress,
  horizontal = false,
}: BreadSectionProps) {
  const { width: windowWidth } = useWindowDimensions();
  const isFeaturedGrid = !horizontal;
  const data = isFeaturedGrid
    ? section.restaurants.filter((r) => r.showAtHomeScreen)
    : section.restaurants;

  // Calculate responsive card dimensions
  const CARD_MARGIN = Platform.OS === "android" ? 2 : 4;
  const CARD_WIDTH =
    (windowWidth -
      2 * HORIZONTAL_PADDING -
      (NUM_COLUMNS - 1) * CARD_MARGIN * 2) /
    NUM_COLUMNS;
  const CARD_HEIGHT = CARD_WIDTH * 0.6 + 80;

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
            <View style={[styles.cardContainer, { height: CARD_HEIGHT }]}>
              <SmallCard
                restaurant={item}
                variant="featured"
                sizeMultiplier={1}
                style={{ width: "100%", height: "100%" }}
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
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 12,
    width: "100%",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    flex: 1,
  },
  seeAll: {
    color: "#2ECC71",
    fontWeight: "500",
    fontSize: 16,
  },
  gridContainer: {
    paddingHorizontal: Platform.OS === "android" ? 2 : 8,
    width: "100%",
  },
  verticalList: {
    paddingHorizontal: 16,
    width: "100%",
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
    width: "100%",
  },
});

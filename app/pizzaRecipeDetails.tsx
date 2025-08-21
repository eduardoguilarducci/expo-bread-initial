import ParallaxScrollView from "@/components/ParallaxScrollView";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { useColorScheme } from "@/hooks/useColorScheme";
import { PizzaRecipeScaler } from "@/src/components/recipe/PizzaRecipeScaler";
import { RecipeInstructions } from "@/src/components/recipe/RecipeInstructions";
import { ThemedText, ThemedView } from "@/src/components/ui";
import {
  RadioButtonGroup,
  RadioButtonOption,
} from "@/src/components/ui/RadioButtonGroup";
import { getRecipeById } from "@/src/data/mockRecipes";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function PizzaRecipeDetails() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const params = useLocalSearchParams();
  const [selectedOption, setSelectedOption] = useState("medium");
  const { id } = params;
  const colorScheme = useColorScheme();

  // Get recipe data
  const recipe = typeof id === "string" ? getRecipeById(id) : undefined;

  if (!recipe) {
    return (
      <ThemedView style={styles.fullScreenBackground}>
        <Text style={styles.errorText}>Receita não encontrada</Text>
      </ThemedView>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: "#FFFFFF" }]}>
      <ParallaxScrollView
        headerBackgroundColor={{ light: "#FFFFFF", dark: "#FFFFFF" }}
        containerStyle={{
          flex: 1,
          backgroundColor: "#FFFFFF",
          minHeight: "100%",
        }}
        headerImage={
          <View style={{ marginTop: 0 }}>
            <Image
              source={recipe.image}
              style={styles.headerImage}
              resizeMode="cover"
            />
            <Pressable
              onPress={router.back}
              style={[
                styles.backButton,
                {
                  top: insets.top ? insets.top + 8 : 24,
                  backgroundColor: "#FFFFFF",
                },
              ]}
              accessibilityLabel="Go back"
              hitSlop={{ top: 16, left: 16, right: 16, bottom: 16 }}
            >
              <View style={styles.backButtonInner}>
                <IconSymbol
                  name="chevron.right"
                  size={22}
                  color="#222"
                  style={{ transform: [{ rotate: "180deg" }] }}
                />
              </View>
            </Pressable>
          </View>
        }
      >
        {/* Fluid Recipe Header */}
        <View style={[styles.fluidHeader, { backgroundColor: "#FFFFFF" }]}>
          <View style={styles.recipeInfo}>
            <Text style={[styles.recipeName, { color: "#1A1A1A" }]}>
              {recipe.name}
            </Text>
            <Text style={[styles.recipeDescription, { color: "#666666" }]}>
              {recipe.description}
            </Text>

            {/* Fluid Meta Information */}
            <View style={styles.fluidMeta}>
              <View style={styles.metaRow}>
                <View style={styles.metaItem}>
                  <ThemedText style={[styles.metaLabel, { color: "#888888" }]}>
                    TEMPO
                  </ThemedText>
                  <ThemedText style={[styles.metaValue, { color: "#1A1A1A" }]}>
                    {recipe.time}
                  </ThemedText>
                </View>
                <View
                  style={[styles.metaDivider, { backgroundColor: "#E0E0E0" }]}
                />
                <View style={styles.metaItem}>
                  <ThemedText style={[styles.metaLabel, { color: "#888888" }]}>
                    DIFICULDADE
                  </ThemedText>
                  <ThemedText style={[styles.metaValue, { color: "#1A1A1A" }]}>
                    {recipe.difficultyLevel}
                  </ThemedText>
                </View>
              </View>
              {recipe.location && (
                <View style={styles.locationContainer}>
                  <View
                    style={[
                      styles.locationDivider,
                      { backgroundColor: "#E0E0E0" },
                    ]}
                  />
                  <View style={styles.locationContent}>
                    <ThemedText
                      style={[styles.locationLabel, { color: "#888888" }]}
                    >
                      ORIGEM
                    </ThemedText>
                    <ThemedText
                      style={[styles.locationValue, { color: "#1A1A1A" }]}
                    >
                      {recipe.location}
                    </ThemedText>
                  </View>
                </View>
              )}
            </View>
          </View>
        </View>

        {/* Fluid Content Container */}
        <View style={[styles.fluidContent, { backgroundColor: "#FFFFFF" }]}>
          {/* Pizza Recipe Scaler Component */}
          <PizzaRecipeScaler recipe={recipe} />

          {/* Recipe Instructions */}
          <View style={styles.sectionSpacer} />
          <RecipeInstructions instructions={recipe.instructions} />

          {recipe.options && recipe.options.length > 0 && (
            <>
              <View style={styles.sectionSpacer} />
              <View style={{ paddingHorizontal: 20 }}>
                <RadioButtonGroup
                  label="Opções da Receita"
                  required
                  options={recipe.options as RadioButtonOption[]}
                  value={selectedOption}
                  onChange={setSelectedOption}
                  style={styles.radioGroup}
                />
              </View>
            </>
          )}
        </View>
      </ParallaxScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreenBackground: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    minHeight: "100%",
  },
  headerImage: {
    width: "100%",
    height: 380,
  },
  backButton: {
    position: "absolute",
    left: 16,
    zIndex: 10,
    borderRadius: 20,
    overflow: "hidden",
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  backButtonInner: {
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  fluidHeader: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 32,
  },
  recipeInfo: {
    width: "100%",
  },
  recipeName: {
    fontSize: 32,
    fontWeight: "800",
    marginBottom: 12,
    textAlign: "left",
    letterSpacing: -0.8,
    lineHeight: 38,
  },
  recipeDescription: {
    fontSize: 17,
    marginBottom: 24,
    fontWeight: "400",
    lineHeight: 26,
    letterSpacing: 0.1,
  },
  fluidMeta: {
    gap: 20,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  metaItem: {
    flex: 1,
    alignItems: "flex-start",
  },
  metaDivider: {
    width: 1,
    height: 40,
    marginHorizontal: 20,
  },
  metaLabel: {
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 6,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  metaValue: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
  },
  locationContainer: {
    marginTop: 8,
  },
  locationDivider: {
    height: 1,
    marginBottom: 16,
  },
  locationContent: {
    alignItems: "flex-start",
  },
  locationLabel: {
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 6,
    letterSpacing: 1.2,
    textTransform: "uppercase",
  },
  locationValue: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 22,
  },
  fluidContent: {
    paddingBottom: 24,
  },
  sectionSpacer: {
    height: 32,
  },
  radioGroup: {
    marginTop: 8,
  },
  errorText: {
    fontSize: 18,
    color: "#FF4B4B",
    textAlign: "center",
    marginTop: 100,
    fontWeight: "bold",
  },
});

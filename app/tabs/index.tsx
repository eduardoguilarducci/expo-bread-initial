import {
  BreadSection,
  RecipeCarousel,
  SpecialRecipesSection,
  ThemedView,
} from "@/src/components";
import { useRecipes } from "@/src/hooks/useRecipes";
import { useRouter } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const { recipes, loading, error } = useRecipes();
  const router = useRouter();

  // Filter bread recipes only
  const breadRecipes = recipes.filter(
    (recipe) => recipe.recipeType === "bread"
  );

  // Filter pizza recipes
  const pizzaRecipes = recipes.filter(
    (recipe) => recipe.recipeType === "pizza"
  );

  // Filter special recipes
  const specialRecipes = recipes.filter(
    (recipe) => recipe.recipeType === "special"
  );

  // Debug logging
  console.log("All recipes:", recipes.length);
  console.log("Bread recipes:", breadRecipes.length);
  console.log("Pizza recipes:", pizzaRecipes.length);
  console.log(
    "Bread recipe names:",
    breadRecipes.map((r) => r.name)
  );
  console.log(
    "Pizza recipe names:",
    pizzaRecipes.map((r) => r.name)
  );
  console.log(
    "Special recipe names:",
    specialRecipes.map((r) => r.name)
  );

  const handleSeeAllRecipes = () => {
    Alert.alert("Ver Todos", "Ver todas as receitas em breve!");
  };

  const handleRecipePress = (recipe: any) => {
    // Route pizza recipes to the pizza details page
    if (recipe.recipeType === "pizza") {
      router.push({
        pathname: "/pizzaRecipeDetails",
        params: { id: recipe.id },
      });
    } else {
      router.push({
        pathname: "/recipeDetails",
        params: { id: recipe.id },
      });
    }
  };

  if (loading) {
    return (
      <ThemedView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2ECC71" />
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </ThemedView>
    );
  }

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        bounces={false}
        alwaysBounceVertical={false}
        overScrollMode="never"
      >
        <View style={styles.visualHeader} />
        <View style={styles.divider} />

        {/* Bread Recipes Section */}
        <View style={styles.breadSection}>
          <BreadSection
            section={{
              title: "Pães de Fermentação Natural e Clássicos",
              restaurants: breadRecipes.map((recipe) => ({
                id: recipe.id,
                name: recipe.name,
                location: recipe.location || "Local não especificado",
                difficultyLevel: recipe.difficultyLevel,
                time: recipe.time,
                showAtHomeScreen: true,
                image: recipe.image,
                cuisine: recipe.cuisine,
                ratings: recipe.ratings,
              })),
              showSeeAll: false,
            }}
            onSeeAllPress={handleSeeAllRecipes}
          />
        </View>

        {/* Pizza Recipes Carousel */}
        <View style={styles.pizzaSection}>
          <RecipeCarousel
            recipes={pizzaRecipes}
            title="Pizza de Longa Fermentação"
            onRecipePress={handleRecipePress}
          />
        </View>

        {/* Special Recipes Section */}
        <View style={styles.specialSection}>
          <SpecialRecipesSection
            recipes={specialRecipes}
            title="Receitas Especiais"
            onRecipePress={handleRecipePress}
            layout="vertical"
          />
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAF8",
  },
  visualHeader: {
    height: 48,
  },
  divider: {
    height: 20,
    backgroundColor: "transparent",
    width: "100%",
  },
  breadSection: {
    marginBottom: 0, // Removed margin to bring sections directly together
  },
  pizzaSection: {
    marginBottom: 16, // Add specific margin for pizza section
  },
  specialSection: {
    marginBottom: 32, // Increased margin to ensure proper spacing from tab bar
  },
  allRecipesTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAF8",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAF8",
    padding: 20,
  },
  errorText: {
    fontSize: 16,
    color: "#FF6B6B",
    textAlign: "center",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 100, // Increased padding to account for tab bar height
  },
});

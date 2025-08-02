import { ThemedText } from "@/src/components/ui/ThemedText";
import { Recipe } from "@/src/types/recipe";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SpecialRecipeCard } from "./SpecialRecipeCard";

interface SpecialRecipesSectionProps {
  recipes: Recipe[];
  title: string;
  onRecipePress?: (recipe: Recipe) => void;
  layout?: "horizontal" | "vertical" | "mixed";
}

export const SpecialRecipesSection: React.FC<SpecialRecipesSectionProps> = ({
  recipes,
  title,
  onRecipePress,
  layout = "mixed",
}) => {
  if (recipes.length === 0) {
    return (
      <View style={styles.container}>
        <ThemedText style={styles.title}>{title}</ThemedText>
        <View style={styles.emptyContainer}>
          <ThemedText style={styles.emptyText}>
            Receitas especiais não disponíveis
          </ThemedText>
        </View>
      </View>
    );
  }

  const renderMixedLayout = () => {
    return recipes.map((recipe, index) => {
      // Alternate between horizontal and vertical layouts
      const isVertical = index % 2 === 0;
      return (
        <SpecialRecipeCard
          key={recipe.id}
          recipe={recipe}
          onPress={onRecipePress}
          layout={isVertical ? "vertical" : "horizontal"}
        />
      );
    });
  };

  const renderUniformLayout = () => {
    return recipes.map((recipe) => (
      <SpecialRecipeCard
        key={recipe.id}
        recipe={recipe}
        onPress={onRecipePress}
        layout={layout}
      />
    ));
  };

  return (
    <View style={styles.container} key={`special-recipes-${recipes.length}`}>
      <ThemedText style={styles.title}>{title}</ThemedText>
      <View style={styles.recipesContainer}>
        {layout === "mixed"
          ? renderMixedLayout()
          : renderUniformLayout()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1A1A1A",
    marginBottom: 16,
    marginTop: 8,
  },
  recipesContainer: {
    gap: 16,
  },
  emptyContainer: {
    height: 120,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderStyle: "dashed",
  },
  emptyText: {
    fontSize: 16,
    color: "#999999",
    textAlign: "center",
  },
}); 
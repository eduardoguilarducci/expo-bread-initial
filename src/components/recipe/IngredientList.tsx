import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { StyleSheet, View } from "react-native";
import { RecipeCalculationService } from "../../services/recipeCalculationService";
import { RecipeCalculation } from "../../types/recipe";
import { ThemedText } from "../ui";

interface IngredientListProps {
  calculation: RecipeCalculation;
}

export const IngredientList: React.FC<IngredientListProps> = ({
  calculation,
}) => {
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 20,
        },
      ]}
    >
      {/* Fluid Title */}
      <ThemedText style={[styles.title, { color: "#1A1A1A" }]}>
        Lista de Ingredientes
      </ThemedText>

      {/* Fluid Ingredients Table */}
      <View style={styles.tableContainer}>
        {/* Table Header */}
        <View style={[styles.tableHeader, { backgroundColor: "#F8F9FA" }]}>
          <View style={[styles.headerName, { borderRightColor: "#E0E0E0" }]}>
            <ThemedText style={[styles.headerText, { color: "#1A1A1A" }]}>
              Ingrediente
            </ThemedText>
          </View>
          <View
            style={[styles.headerPercentage, { borderRightColor: "#E0E0E0" }]}
          >
            <ThemedText style={[styles.headerText, { color: "#1A1A1A" }]}>
              %
            </ThemedText>
          </View>
          <View style={styles.headerAmount}>
            <ThemedText style={[styles.headerText, { color: "#1A1A1A" }]}>
              Qtde
            </ThemedText>
          </View>
        </View>

        {/* Table Rows */}
        {calculation.ingredients.map((ingredient, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              { borderBottomColor: "#F0F0F0" },
              index % 2 === 0
                ? { backgroundColor: "#FFFFFF" }
                : { backgroundColor: "#FAFBFC" },
            ]}
          >
            <View style={[styles.cellName, { borderRightColor: "#E0E0E0" }]}>
              <ThemedText style={[styles.ingredientName, { color: "#2A2A2A" }]}>
                {ingredient.name}
              </ThemedText>
            </View>
            <View
              style={[styles.cellPercentage, { borderRightColor: "#E0E0E0" }]}
            >
              <ThemedText style={[styles.percentageText, { color: "#666666" }]}>
                {ingredient.percentage}%
              </ThemedText>
            </View>
            <View style={styles.cellAmount}>
              <ThemedText
                style={[styles.ingredientAmount, { color: "#2A2A2A" }]}
              >
                {RecipeCalculationService.formatAmount(
                  ingredient.displayAmount,
                  ingredient.displayUnit
                )}
              </ThemedText>
            </View>
          </View>
        ))}
      </View>

      {/* Fluid Recipe Summary */}
      <View style={styles.summarySection}>
        <ThemedText style={[styles.summaryTitle, { color: "#1A1A1A" }]}>
          Resumo da Receita
        </ThemedText>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <View style={[styles.summaryItem, { backgroundColor: "#F8F9FA" }]}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                🍕 Quantidade
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {calculation.quantity}{" "}
                {calculation.quantity === 1 ? "pizza" : "pizzas"}
              </ThemedText>
            </View>

            <View style={[styles.summaryItem, { backgroundColor: "#F8F9FA" }]}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                ⚖️ Total massa
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {RecipeCalculationService.formatTotalDoughWeight(calculation)}
              </ThemedText>
            </View>
          </View>

          <View style={styles.summaryRow}>
            <View style={[styles.summaryItem, { backgroundColor: "#F8F9FA" }]}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                🎯 Massa por pizza
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {RecipeCalculationService.formatDoughWeightPerBread(
                  calculation
                )}
              </ThemedText>
            </View>

            <View style={[styles.summaryItem, { backgroundColor: "#F8F9FA" }]}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                💧 Hidratação
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {RecipeCalculationService.formatPercentage(
                  calculation.hydrationPercentage
                )}
              </ThemedText>
            </View>
          </View>

          <View style={styles.summaryRow}>
            <View style={[styles.summaryItem, { backgroundColor: "#F8F9FA" }]}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                🌾 Farinha total
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {RecipeCalculationService.formatTotalFlourWeight(calculation)}
              </ThemedText>
            </View>

            <View style={[styles.summaryItem, { backgroundColor: "#F8F9FA" }]}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                🧀 Farinha por pizza
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {RecipeCalculationService.formatFlourWeightPerBread(
                  calculation
                )}
              </ThemedText>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
    marginBottom: 24,
  },
  tableContainer: {
    marginBottom: 24,
    marginHorizontal: 4,
  },
  tableHeader: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
  },
  headerText: {
    fontSize: 15,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.3,
  },
  headerName: {
    flex: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRightWidth: 1,
  },
  headerPercentage: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRightWidth: 1,
  },
  headerAmount: {
    flex: 0.8,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  tableRow: {
    flexDirection: "row",
    borderBottomWidth: 1,
  },
  cellName: {
    flex: 2,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRightWidth: 1,
    justifyContent: "center",
  },
  cellPercentage: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRightWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cellAmount: {
    flex: 0.8,
    paddingVertical: 12,
    paddingHorizontal: 8,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 22,
    letterSpacing: 0.2,
  },
  percentageText: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.1,
  },
  ingredientAmount: {
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 0.1,
  },
  summarySection: {
    padding: 20,
    marginHorizontal: 4,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 20,
    letterSpacing: 0.3,
  },
  summaryContainer: {
    flex: 1,
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 12,
    borderRadius: 12,
    marginHorizontal: 4,
  },
  summaryLabel: {
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    marginBottom: 6,
    lineHeight: 14,
    letterSpacing: 0.2,
  },
  summaryValue: {
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 0.2,
  },
});

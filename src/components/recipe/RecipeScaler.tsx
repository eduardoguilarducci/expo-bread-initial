import { useColorScheme } from "@/hooks/useColorScheme";
import React, { useMemo, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RecipeCalculationService } from "../../services/recipeCalculationService";
import { Recipe, UnitSystem } from "../../types/recipe";
import { ThemedText } from "../ui";
import { IngredientList } from "./IngredientList";

interface RecipeScalerProps {
  recipe: Recipe;
}

export const RecipeScaler: React.FC<RecipeScalerProps> = ({ recipe }) => {
  const [quantity, setQuantity] = useState(recipe.defaultQuantity);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const colorScheme = useColorScheme();

  const calculation = useMemo(() => {
    return RecipeCalculationService.calculateRecipeByQuantity(
      recipe,
      quantity,
      UnitSystem.METRIC
    );
  }, [recipe, quantity]);

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    setIsDropdownVisible(false);
  };

  const getQuantityChangeIndicator = (): { message: string; color: string } => {
    const difference = quantity - recipe.defaultQuantity;

    if (difference === 0) {
      return {
        message: "Receita original",
        color: "#666666",
      };
    } else if (difference > 0) {
      return {
        message: `+${difference} ${difference === 1 ? "pão" : "pães"} a mais`,
        color: "#2ECC71",
      };
    } else {
      return {
        message: `${Math.abs(difference)} ${
          Math.abs(difference) === 1 ? "pão" : "pães"
        } a menos`,
        color: "#FF5722",
      };
    }
  };

  const quantityIndicator = getQuantityChangeIndicator();
  const breadInfo = RecipeCalculationService.getBreadInfo(
    recipe,
    UnitSystem.METRIC
  );

  // Generate options from 1 to 20
  const quantityOptions = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* Fluid Recipe Scaler Section */}
      <View
        style={[
          styles.scalerSection,
          {
            backgroundColor: "#FFFFFF",
            paddingHorizontal: 20,
          },
        ]}
      >
        <View style={styles.header}>
          <ThemedText style={[styles.title, { color: "#1A1A1A" }]}>
            Calculadora de Receita
          </ThemedText>
        </View>

        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <ThemedText style={[styles.inputLabel, { color: "#1A1A1A" }]}>
              Quantos pães você quer fazer?
            </ThemedText>
            <TouchableOpacity
              style={styles.dropdownContainer}
              onPress={() => setIsDropdownVisible(true)}
              activeOpacity={0.7}
            >
              <View
                style={[
                  styles.dropdownButton,
                  {
                    backgroundColor: "#FFFFFF",
                    borderWidth: 2,
                    borderColor: "#2ECC71",
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                    shadowOffset: { width: 0, height: 4 },
                    elevation: 4,
                  },
                ]}
              >
                <ThemedText
                  style={[styles.dropdownValue, { color: "#1A1A1A" }]}
                >
                  {quantity}
                </ThemedText>
                <ThemedText style={[styles.dropdownUnit, { color: "#666666" }]}>
                  {quantity === 1 ? "pão" : "pães"}
                </ThemedText>
                <View style={styles.dropdownArrow}>
                  <ThemedText style={[styles.arrowText, { color: "#2ECC71" }]}>
                    ▼
                  </ThemedText>
                </View>
              </View>
            </TouchableOpacity>
            <ThemedText style={[styles.dropdownHint, { color: "#2ECC71" }]}>
              Toque para alterar
            </ThemedText>
          </View>

          {quantity !== recipe.defaultQuantity && (
            <View style={styles.changeIndicator}>
              <ThemedText
                style={[styles.changeText, { color: quantityIndicator.color }]}
              >
                {quantityIndicator.message}
              </ThemedText>
            </View>
          )}
        </View>
      </View>

      {/* Ingredients List */}
      <IngredientList calculation={calculation} />

      {/* Dropdown Modal */}
      <Modal
        visible={isDropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsDropdownVisible(false)}
        >
          <View
            style={[
              styles.modalContent,
              {
                backgroundColor: "#FFFFFF",
              },
            ]}
          >
            <View
              style={[
                styles.dropdownHeader,
                {
                  borderBottomColor: "#E0E0E0",
                },
              ]}
            >
              <ThemedText style={[styles.dropdownTitle, { color: "#1A1A1A" }]}>
                Selecione a quantidade
              </ThemedText>
            </View>
            <ScrollView
              style={styles.dropdownList}
              showsVerticalScrollIndicator={false}
            >
              {quantityOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.dropdownOption,
                    { borderBottomColor: "#F0F0F0" },
                    quantity === option && styles.dropdownOptionSelected,
                  ]}
                  onPress={() => handleQuantityChange(option)}
                >
                  <ThemedText
                    style={[
                      styles.dropdownOptionText,
                      {
                        color: quantity === option ? "#FFFFFF" : "#1A1A1A",
                      },
                    ]}
                  >
                    {option} {option === 1 ? "pão" : "pães"}
                  </ThemedText>
                  {quantity === option && (
                    <ThemedText style={styles.checkmark}>✓</ThemedText>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scalerSection: {
    paddingVertical: 24,
  },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  breadInfo: {
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    fontWeight: "500",
  },
  inputSection: {
    marginBottom: 24,
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
    textAlign: "center",
  },
  dropdownContainer: {
    width: "100%",
    maxWidth: 200,
  },
  dropdownButton: {
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownValue: {
    fontSize: 18,
    fontWeight: "bold",
  },
  dropdownUnit: {
    fontSize: 16,
    marginLeft: 4,
  },
  dropdownArrow: {
    marginLeft: 8,
  },
  arrowText: {
    fontSize: 12,
  },
  dropdownHint: {
    fontSize: 12,
    fontWeight: "500",
    marginTop: 8,
    textAlign: "center",
    letterSpacing: 0.2,
  },
  changeIndicator: {
    alignItems: "center",
    marginTop: 12,
  },
  changeText: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 4,
  },
  totalWeightText: {
    fontSize: 14,
    fontWeight: "500",
  },
  summarySection: {
    marginTop: 8,
  },
  summaryGrid: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  summaryItem: {
    flex: 1,
    alignItems: "center",
  },
  summaryDivider: {
    width: 1,
    height: 40,
    marginHorizontal: 16,
  },
  summaryLabel: {
    fontSize: 10,
    fontWeight: "600",
    marginBottom: 4,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    borderRadius: 16,
    width: "80%",
    maxHeight: "60%",
    overflow: "hidden",
  },
  dropdownHeader: {
    padding: 20,
    borderBottomWidth: 1,
  },
  dropdownTitle: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  dropdownList: {
    maxHeight: 300,
  },
  dropdownOption: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  dropdownOptionSelected: {
    backgroundColor: "#2ECC71",
  },
  dropdownOptionText: {
    fontSize: 16,
    fontWeight: "500",
  },
  checkmark: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

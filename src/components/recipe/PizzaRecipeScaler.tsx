import { useColorScheme } from "@/hooks/useColorScheme";
import React, { useMemo, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { PizzaCalculationService } from "../../services/pizzaCalculationService";
import { Recipe, UnitSystem } from "../../types/recipe";
import { ThemedText } from "../ui";
import { IngredientList } from "./IngredientList";

interface PizzaRecipeScalerProps {
  recipe: Recipe;
}

export const PizzaRecipeScaler: React.FC<PizzaRecipeScalerProps> = ({
  recipe,
}) => {
  const [pizzaCount, setPizzaCount] = useState(recipe.defaultQuantity || 1);
  const [discWeight, setDiscWeight] = useState(
    (recipe.defaultDiscWeight || 250).toString()
  );
  const [hydration, setHydration] = useState(
    (recipe.defaultHydration || 65).toString()
  );
  const [yeastType, setYeastType] = useState("fresh"); // "fresh" for Fermento Fresco, "dry" for Fermento Biológico Seco
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isYeastTypeDropdownVisible, setIsYeastTypeDropdownVisible] =
    useState(false);
  const colorScheme = useColorScheme();

  // Validate hydration input using recipe-specific min/max values if available
  const validateHydration = (value: string) => {
    const minHydration = recipe.minHydration || 40;
    const maxHydration = recipe.maxHydration || 100;
    const defaultHydration = recipe.defaultHydration || 65;

    const numValue = parseInt(value, 10);
    if (isNaN(numValue)) return defaultHydration.toString();
    if (numValue < minHydration) return minHydration.toString();
    if (numValue > maxHydration) return maxHydration.toString();
    return value;
  };

  // Handle hydration change with validation
  const handleHydrationChange = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setHydration(sanitizedValue);
  };

  // Handle hydration blur event for final validation
  const handleHydrationBlur = () => {
    setHydration(validateHydration(hydration));
  };

  // Handle disc weight change
  const handleDiscWeightChange = (value: string) => {
    const sanitizedValue = value.replace(/[^0-9]/g, "");
    setDiscWeight(sanitizedValue);
  };

  // Handle pizza count change
  const handlePizzaCountChange = (newCount: number) => {
    setPizzaCount(newCount);
    setIsDropdownVisible(false);
  };

  // Handle yeast type change
  const handleYeastTypeChange = (newType: string) => {
    setYeastType(newType);
    setIsYeastTypeDropdownVisible(false);
  };

  // Calculate ingredients based on pizza parameters
  const calculation = useMemo(() => {
    // Use the PizzaCalculationService to calculate the recipe
    return PizzaCalculationService.calculatePizzaRecipe(
      recipe,
      pizzaCount,
      parseInt(discWeight, 10),
      parseInt(hydration, 10),
      UnitSystem.METRIC,
      yeastType
    );
  }, [recipe, pizzaCount, discWeight, hydration, yeastType]);

  // Generate options from 1 to 100 for pizza count
  const pizzaCountOptions = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {/* Pizza Recipe Scaler Section */}
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
            Calculadora de Pizza
          </ThemedText>
        </View>

        {/* Pizza Count Input */}
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <ThemedText style={[styles.inputLabel, { color: "#1A1A1A" }]}>
              Número de Pizzas
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
                  {pizzaCount}
                </ThemedText>
                <ThemedText style={[styles.dropdownUnit, { color: "#666666" }]}>
                  {pizzaCount === 1 ? "pizza" : "pizzas"}
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
        </View>

        {/* Disc Weight Input */}
        <View style={styles.inputSection}>
          <View style={styles.textInputContainer}>
            <ThemedText style={[styles.inputLabel, { color: "#1A1A1A" }]}>
              Peso do disco (g)
            </ThemedText>
            <TextInput
              style={[
                styles.textInput,
                { color: "#1A1A1A", borderColor: "#2ECC71" },
              ]}
              value={discWeight}
              onChangeText={handleDiscWeightChange}
              keyboardType="numeric"
              placeholder="250"
              placeholderTextColor="#AAAAAA"
            />
          </View>
        </View>

        {/* Hydration Input */}
        <View style={styles.inputSection}>
          <View style={styles.textInputContainer}>
            <ThemedText style={[styles.inputLabel, { color: "#1A1A1A" }]}>
              Água (Hidratação %)
            </ThemedText>
            <View style={styles.hydrationInputContainer}>
              <TextInput
                style={[
                  styles.textInput,
                  { color: "#1A1A1A", borderColor: "#2ECC71" },
                ]}
                value={hydration}
                onChangeText={handleHydrationChange}
                onBlur={handleHydrationBlur}
                keyboardType="numeric"
                placeholder="65"
                placeholderTextColor="#AAAAAA"
              />
              <ThemedText style={styles.percentSymbol}>%</ThemedText>
            </View>
            <ThemedText style={[styles.rangeHint, { color: "#666666" }]}>
              Valor permitido: {recipe.minHydration || 40}% -{" "}
              {recipe.maxHydration || 100}%
            </ThemedText>
          </View>
        </View>

        {/* Yeast Type Input */}
        <View style={styles.inputSection}>
          <View style={styles.inputContainer}>
            <ThemedText style={[styles.inputLabel, { color: "#1A1A1A" }]}>
              Tipo de Fermento
            </ThemedText>
            <TouchableOpacity
              style={styles.dropdownContainer}
              onPress={() => setIsYeastTypeDropdownVisible(true)}
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
                  {yeastType === "fresh"
                    ? "Fermento Fresco"
                    : "Fermento Biológico Seco"}
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
        </View>

        {/* Summary Section */}
        <View style={styles.summarySection}>
          <View
            style={[styles.summaryContainer, { backgroundColor: "#F8F8F8" }]}
          >
            <View style={styles.summaryRow}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                HIDRATAÇÃO
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {hydration}%
              </ThemedText>
            </View>
            <View
              style={[styles.summaryDivider, { backgroundColor: "#E0E0E0" }]}
            />
            <View style={styles.summaryRow}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                SAL
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {calculation.saltPercentage.toFixed(1)}%
              </ThemedText>
            </View>
            <View
              style={[styles.summaryDivider, { backgroundColor: "#E0E0E0" }]}
            />
            <View style={styles.summaryRow}>
              <ThemedText style={[styles.summaryLabel, { color: "#666666" }]}>
                FERMENTO
              </ThemedText>
              <ThemedText style={[styles.summaryValue, { color: "#1A1A1A" }]}>
                {PizzaCalculationService.getYeastPercentage(
                  recipe.ingredients,
                  yeastType
                ).toFixed(2)}
                %
              </ThemedText>
            </View>
          </View>
        </View>
      </View>

      {/* Ingredients List */}
      <IngredientList calculation={calculation} />

      {/* Pizza Count Dropdown Modal */}
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
              {pizzaCountOptions.map((option) => (
                <TouchableOpacity
                  key={option}
                  style={[
                    styles.dropdownOption,
                    { borderBottomColor: "#F0F0F0" },
                    pizzaCount === option && styles.dropdownOptionSelected,
                  ]}
                  onPress={() => handlePizzaCountChange(option)}
                >
                  <ThemedText
                    style={[
                      styles.dropdownOptionText,
                      {
                        color: pizzaCount === option ? "#FFFFFF" : "#1A1A1A",
                      },
                    ]}
                  >
                    {option} {option === 1 ? "pizza" : "pizzas"}
                  </ThemedText>
                  {pizzaCount === option && (
                    <ThemedText style={styles.checkmark}>✓</ThemedText>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </TouchableOpacity>
      </Modal>

      {/* Yeast Type Dropdown Modal */}
      <Modal
        visible={isYeastTypeDropdownVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsYeastTypeDropdownVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsYeastTypeDropdownVisible(false)}
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
                Selecione o tipo de fermento
              </ThemedText>
            </View>
            <View style={styles.dropdownList}>
              {[
                { label: "Fermento Fresco", value: "fresh" },
                { label: "Fermento Biológico Seco", value: "dry" },
              ].map((option) => (
                <TouchableOpacity
                  key={option.value}
                  style={[
                    styles.dropdownOption,
                    { borderBottomColor: "#F0F0F0" },
                    yeastType === option.value && styles.dropdownOptionSelected,
                  ]}
                  onPress={() => handleYeastTypeChange(option.value)}
                >
                  <ThemedText
                    style={[
                      styles.dropdownOptionText,
                      {
                        color:
                          yeastType === option.value ? "#FFFFFF" : "#1A1A1A",
                      },
                    ]}
                  >
                    {option.label}
                  </ThemedText>
                  {yeastType === option.value && (
                    <ThemedText style={styles.checkmark}>✓</ThemedText>
                  )}
                </TouchableOpacity>
              ))}
            </View>
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
  inputSection: {
    marginBottom: 24,
  },
  inputContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  textInputContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 8,
  },
  hydrationInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    maxWidth: 200,
    position: "relative",
  },
  percentSymbol: {
    position: "absolute",
    right: 16,
    fontSize: 18,
    fontWeight: "bold",
    color: "#666666",
  },
  textInput: {
    width: "100%",
    maxWidth: 200,
    height: 56,
    borderWidth: 2,
    borderRadius: 12,
    paddingHorizontal: 16,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  rangeHint: {
    fontSize: 12,
    marginTop: 8,
    textAlign: "center",
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
  summarySection: {
    marginTop: 16,
  },
  summaryContainer: {
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: 8,
  },
  summaryRow: {
    alignItems: "center",
    flex: 1,
  },
  summaryLabel: {
    fontSize: 11,
    fontWeight: "700",
    marginBottom: 6,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.2,
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  summaryDivider: {
    width: 1,
    height: 40,
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

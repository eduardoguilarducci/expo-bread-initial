import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity, View } from "react-native";
import { RecipeCalculationService } from "../../services/recipeCalculationService";
import { UnitSystem } from "../../types/recipe";
import { ThemedText } from "../ui";

interface UnitSystemToggleProps {
  currentSystem: UnitSystem;
  onSystemChange: (system: UnitSystem) => void;
  style?: any;
}

export const UnitSystemToggle: React.FC<UnitSystemToggleProps> = ({
  currentSystem,
  onSystemChange,
  style,
}) => {
  const slideAnim = useRef(
    new Animated.Value(currentSystem === UnitSystem.METRIC ? 0 : 1)
  ).current;

  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(slideAnim, {
      toValue: currentSystem === UnitSystem.METRIC ? 0 : 1,
      useNativeDriver: false,
      tension: 100,
      friction: 8,
    }).start();
  }, [currentSystem, slideAnim]);

  const handleToggle = () => {
    // Add a small scale animation for feedback
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    const newSystem =
      currentSystem === UnitSystem.METRIC
        ? UnitSystem.IMPERIAL
        : UnitSystem.METRIC;

    onSystemChange(newSystem);
  };

  const slideInterpolate = slideAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 82], // Width of one option minus padding
  });

  return (
    <Animated.View
      style={[styles.container, style, { transform: [{ scale: scaleAnim }] }]}
    >
      <TouchableOpacity
        style={styles.toggleContainer}
        onPress={handleToggle}
        activeOpacity={0.8}
      >
        {/* Background slider */}
        <Animated.View
          style={[
            styles.slider,
            {
              transform: [{ translateX: slideInterpolate }],
            },
          ]}
        />

        {/* Option labels */}
        <View style={styles.optionsContainer}>
          <View style={styles.option}>
            <ThemedText
              style={[
                styles.optionText,
                {
                  color: currentSystem === UnitSystem.METRIC ? "#000" : "#666",
                },
              ]}
            >
              🌍 Métrico
            </ThemedText>
          </View>
          <View style={styles.option}>
            <ThemedText
              style={[
                styles.optionText,
                {
                  color:
                    currentSystem === UnitSystem.IMPERIAL ? "#000" : "#666",
                },
              ]}
            >
              🇺🇸 Imperial
            </ThemedText>
          </View>
        </View>
      </TouchableOpacity>

      {/* Current system indicator */}
      <View style={styles.indicatorContainer}>
        <ThemedText style={[styles.indicatorText, { color: "#000" }]}>
          Sistema: {RecipeCalculationService.getUnitSystemLabel(currentSystem)}
        </ThemedText>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 12,
  },
  toggleContainer: {
    flexDirection: "row",
    backgroundColor: "#F0F0F0",
    borderRadius: 25,
    padding: 4,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  slider: {
    position: "absolute",
    top: 4,
    left: 4,
    width: 82,
    height: 32,
    backgroundColor: "#fff",
    borderRadius: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  optionsContainer: {
    flexDirection: "row",
  },
  option: {
    width: 82,
    height: 32,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 8,
  },
  optionText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
  },
  indicatorContainer: {
    marginTop: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 1,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  indicatorText: {
    fontSize: 11,
    fontWeight: "500",
  },
});

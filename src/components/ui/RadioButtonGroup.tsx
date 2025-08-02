import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "./ThemedText";

export interface RadioButtonOption {
  label: string;
  value: string;
}

interface RadioButtonGroupProps {
  options: RadioButtonOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  label?: string;
  style?: object;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  options,
  value,
  onChange,
  required = false,
  label,
  style,
}) => {
  return (
    <View style={style}>
      {label && (
        <View style={styles.labelRow}>
          <ThemedText type="defaultSemiBold" style={styles.label}>
            {label}
          </ThemedText>
          {required && (
            <View style={styles.requiredBadge}>
              <ThemedText style={styles.requiredText}>REQUIRED</ThemedText>
            </View>
          )}
        </View>
      )}
      {options.map((option) => (
        <TouchableOpacity
          key={option.value}
          style={styles.optionRow}
          onPress={() => onChange(option.value)}
          accessibilityRole="radio"
          accessibilityState={{ selected: value === option.value }}
        >
          <View
            style={[
              styles.radioOuter,
              value === option.value && styles.radioOuterSelected,
            ]}
          >
            {value === option.value && <View style={styles.radioInner} />}
          </View>
          <ThemedText style={styles.optionLabel}>{option.label}</ThemedText>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginRight: 8,
  },
  requiredBadge: {
    backgroundColor: "#FFF3D6",
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 4,
  },
  requiredText: {
    color: "#E6A23C",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#BEEAD9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    backgroundColor: "#F8FAF8",
  },
  radioOuterSelected: {
    borderColor: "#4ED19A",
  },
  radioInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#4ED19A",
  },
  optionLabel: {
    fontSize: 16,
    color: "#2A3A32",
  },
});

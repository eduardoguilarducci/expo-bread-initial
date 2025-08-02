import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedText } from "../ui/ThemedText";

interface HeaderProps {
  deliveryLocation?: string;
  onFilterPress?: () => void;
}

export function Header({
  deliveryLocation = "San Francisco",
  onFilterPress,
}: HeaderProps) {
  return (
    <View style={styles.header}>
      <View>
        <ThemedText style={styles.deliveryTo}>DELIVERY TO</ThemedText>
        <ThemedText style={styles.city}>{deliveryLocation}</ThemedText>
      </View>
      <TouchableOpacity onPress={onFilterPress}>
        <ThemedText style={styles.filter}>Filter</ThemedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 32,
    paddingBottom: 12,
    backgroundColor: "#F8FAF8",
  },
  deliveryTo: {
    color: "#2ECC71",
    fontSize: 15,
    fontWeight: "500",
    letterSpacing: 1,
  },
  city: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#222",
    marginTop: 2,
  },
  filter: {
    fontSize: 17,
    color: "#222",
    fontWeight: "500",
  },
});

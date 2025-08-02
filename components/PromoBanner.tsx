import { ThemedView } from "@/src/components/ui";
import { StyleSheet, Text } from "react-native";

export function PromoBanner() {
  return (
    <ThemedView style={styles.banner}>
      <Text style={styles.text}>{"Free Delivery for\n1 Month!"}</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  banner: {
    backgroundColor: "#E6FAF1",
    borderRadius: 16,
    padding: 24,
    marginVertical: 12,
    alignItems: "flex-start",
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#111",
  },
});

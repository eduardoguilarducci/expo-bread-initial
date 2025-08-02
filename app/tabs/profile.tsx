import { useColorScheme } from "@/hooks/useColorScheme";
import { ThemedText } from "@/src/components/ui/ThemedText";
import { ThemedView } from "@/src/components/ui/ThemedView";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

export default function ProfileScreen() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <ThemedText style={styles.title}>Profile</ThemedText>
          <ThemedText style={styles.subtitle}>
            Manage your account and preferences
          </ThemedText>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Account</ThemedText>
          <View style={styles.card}>
            <ThemedText style={styles.cardTitle}>User Information</ThemedText>
            <ThemedText style={styles.cardText}>Name: John Doe</ThemedText>
            <ThemedText style={styles.cardText}>
              Email: john.doe@example.com
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>Preferences</ThemedText>
          <View style={styles.card}>
            <ThemedText style={styles.cardTitle}>App Settings</ThemedText>
            <ThemedText style={styles.cardText}>
              Theme: {colorScheme === "dark" ? "Dark" : "Light"}
            </ThemedText>
            <ThemedText style={styles.cardText}>
              Notifications: Enabled
            </ThemedText>
          </View>
        </View>

        <View style={styles.section}>
          <ThemedText style={styles.sectionTitle}>About</ThemedText>
          <View style={styles.card}>
            <ThemedText style={styles.cardTitle}>ExpoBread</ThemedText>
            <ThemedText style={styles.cardText}>Version: 1.0.0</ThemedText>
            <ThemedText style={styles.cardText}>
              Your ultimate bread companion
            </ThemedText>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 100, // Extra padding for tab bar
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 60,
    paddingBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
  },
  section: {
    paddingHorizontal: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    opacity: 0.8,
    marginBottom: 4,
  },
});

import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useThemeColor } from "../../../hooks/useThemeColor";
import { ThemedText, ThemedView } from "../ui";

interface RecipeInstructionsProps {
  instructions: string;
  title?: string;
}

export const RecipeInstructions: React.FC<RecipeInstructionsProps> = ({
  instructions,
  title = "Instruções",
}) => {
  const cardBackground = useThemeColor({}, "background");
  const colorScheme = useColorScheme();

  const formatStepNumber = (step: number): string => {
    return step.toString().padStart(2, "0");
  };

  const parseInstructions = (
    instructionsText: string
  ): {
    title: string;
    description: string;
  }[] => {
    if (!instructionsText) return [];

    // Split by the instruction marker (🔹)
    const steps = instructionsText
      .split("🔹")
      .filter((step) => step.trim().length > 0)
      .map((step) => step.trim());

    return steps.map((step) => {
      // Extract title (text between ** **)
      const titleMatch = step.match(/\*\*(.*?)\*\*/);
      const title = titleMatch ? titleMatch[1] : "";

      // Extract description (text after the title and dash)
      const description = step.replace(/\*\*(.*?)\*\*\s*-?\s*/, "").trim();

      return {
        title,
        description,
      };
    });
  };

  const parsedSteps = parseInstructions(instructions);

  return (
    <ThemedView
      style={[
        styles.container,
        {
          backgroundColor: "#FFFFFF",
          paddingHorizontal: 8,
        },
      ]}
    >
      <ThemedText style={[styles.sectionTitle, { color: "#1A1A1A" }]}>
        {title}
      </ThemedText>

      <ScrollView
        style={styles.instructionsContainer}
        showsVerticalScrollIndicator={false}
      >
        {parsedSteps.map((step, index) => (
          <View key={index} style={styles.stepContainer}>
            <View style={styles.stepHeader}>
              <View style={styles.stepNumberContainer}>
                <Text style={styles.stepNumber}>
                  {formatStepNumber(index + 1)}
                </Text>
              </View>
              {step.title && (
                <View style={styles.stepTitleContainer}>
                  <ThemedText style={[styles.stepTitle, { color: "#1A1A1A" }]}>
                    {step.title}
                  </ThemedText>
                </View>
              )}
            </View>

            <View style={styles.stepContent}>
              <ThemedText style={[styles.stepText, { color: "#2A2A2A" }]}>
                {step.description}
              </ThemedText>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.footer}>
        <ThemedText style={[styles.footerText, { color: "#666666" }]}>
          ✨ Aproveite sua receita artesanal! ✨
        </ThemedText>
      </View>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 24,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  instructionsContainer: {
    flex: 1,
  },
  stepContainer: {
    marginBottom: 24,
    padding: 8,
    marginHorizontal: 0,
  },
  stepHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    flexWrap: "wrap",
  },
  stepNumberContainer: {
    backgroundColor: "#2ECC71",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  stepNumber: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  stepTitleContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  stepContent: {
    flex: 1,
  },
  stepText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "400",
  },
  footer: {
    marginTop: 24,
    paddingVertical: 20,
    alignItems: "center",
    marginHorizontal: 0,
  },
  footerText: {
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
  },
});

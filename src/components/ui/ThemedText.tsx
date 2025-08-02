import { Text, TextProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?:
    | "default"
    | "title"
    | "defaultSemiBold"
    | "subtitle"
    | "body"
    | "bodySemiBold"
    | "bodySmall"
    | "bodySmallSemiBold"
    | "link";
};

export function ThemedText(props: ThemedTextProps) {
  const {
    style,
    lightColor,
    darkColor,
    type = "default",
    ...otherProps
  } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  const getTextStyle = () => {
    switch (type) {
      case "title":
        return { fontSize: 32, fontWeight: "bold" as const };
      case "defaultSemiBold":
        return { fontSize: 16, fontWeight: "600" as const };
      case "subtitle":
        return { fontSize: 20, fontWeight: "bold" as const };
      case "body":
        return { fontSize: 16, fontWeight: "normal" as const };
      case "bodySemiBold":
        return { fontSize: 16, fontWeight: "600" as const };
      case "bodySmall":
        return { fontSize: 14, fontWeight: "normal" as const };
      case "bodySmallSemiBold":
        return { fontSize: 14, fontWeight: "600" as const };
      case "link":
        return {
          fontSize: 16,
          fontWeight: "normal" as const,
          color: "#0a7ea4",
        };
      default:
        return { fontSize: 16, fontWeight: "normal" as const };
    }
  };

  return <Text style={[{ color }, getTextStyle(), style]} {...otherProps} />;
}

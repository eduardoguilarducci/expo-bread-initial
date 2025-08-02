export const COLORS = {
  primary: "#2ECC71",
  secondary: "#4CAF50",
  background: "#F8FAF8",
  white: "#FFFFFF",
  text: {
    primary: "#222",
    secondary: "#444",
    tertiary: "#888",
  },
  error: "#FF6B6B",
  shadow: "#000",
} as const;

export const SPACING = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 18,
  xxl: 24,
  xxxl: 32,
} as const;

export const BORDER_RADIUS = {
  sm: 6,
  md: 12,
  lg: 16,
} as const;

export const FONT_SIZES = {
  xs: 13,
  sm: 14,
  md: 15,
  lg: 16,
  xl: 17,
  xxl: 22,
  xxxl: 24,
  title: 32,
} as const;

export const FONT_WEIGHTS = {
  normal: "normal" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "bold" as const,
} as const;

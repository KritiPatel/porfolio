export const theme = {
  colors: {
    background: "#050505",
    surface: "#0f0f0f",
    surfaceLight: "#1a1a1a",
    surfaceHover: "#222222",
    border: "#2a2a2a",
    borderLight: "#3a3a3a",

    text: {
      primary: "#f0f0f0",
      secondary: "#a0a0a0",
      muted: "#666666",
    },

    accent: {
      DEFAULT: "#10b981",
      light: "#34d399",
      dark: "#059669",
      darker: "#047857",
      glow: "rgba(16, 185, 129, 0.15)",
      glowStrong: "rgba(16, 185, 129, 0.3)",
    },
  },

  fonts: {
    heading: "'Inter', system-ui, sans-serif",
    body: "'Inter', system-ui, sans-serif",
    mono: "'JetBrains Mono', 'Fira Code', monospace",
  },

  animation: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    slower: "800ms",
    easing: "cubic-bezier(0.16, 1, 0.3, 1)",
  },

  layout: {
    maxWidth: "1200px",
    sectionPadding: "6rem",
    navHeight: "4rem",
  },

  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
} as const;

export type Theme = typeof theme;

export function flattenColors(
  obj: Record<string, unknown>,
  prefix = ""
): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const cssKey = prefix ? `${prefix}-${key}` : key;
    if (typeof value === "string") {
      result[cssKey] = value;
    } else if (typeof value === "object" && value !== null) {
      Object.assign(
        result,
        flattenColors(value as Record<string, unknown>, cssKey)
      );
    }
  }
  return result;
}

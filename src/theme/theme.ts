export const theme = {
  colors: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",
    secondary: "#64748b",
    danger: "#dc2626",
    background: "#ffffff",
    surface: "#f8fafc",
    border: "#e2e8f0",
    text: "#1e293b",
    textMuted: "#64748b",
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
  },
  radii: {
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },
  fonts: {
    body: "system-ui, -apple-system, sans-serif",
  },
} as const;

export type Theme = typeof theme;

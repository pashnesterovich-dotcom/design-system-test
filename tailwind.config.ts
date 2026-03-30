import type { Config } from "tailwindcss";

/**
 * AI Manufactury Design System — Tailwind Configuration
 * All values are sourced from tokens.json / index.css
 * Dark theme only.
 */
const config: Config = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      /**
       * Font Family
       * Inter is the primary font for AI Manufactury.
       * Load it via Google Fonts or a local @font-face.
       */
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },

      /**
       * Font Size — from Primitives: font-size
       */
      fontSize: {
        "11": ["11px", { lineHeight: "16px" }],
        "12": ["12px", { lineHeight: "16px" }],
        "13": ["13px", { lineHeight: "20px" }],
        "14": ["14px", { lineHeight: "20px" }],
        "16": ["16px", { lineHeight: "24px" }],
        "18": ["18px", { lineHeight: "28px" }],
        "20": ["20px", { lineHeight: "28px" }],
        "24": ["24px", { lineHeight: "32px" }],
        "30": ["30px", { lineHeight: "40px" }],
        "36": ["36px", { lineHeight: "44px" }],
      },

      /**
       * Spacing — from Primitives: spacing
       * Extends the default Tailwind scale.
       */
      spacing: {
        "2":  "2px",
        "4":  "4px",
        "8":  "8px",
        "12": "12px",
        "16": "16px",
        "20": "20px",
        "24": "24px",
        "32": "32px",
        "40": "40px",
        "48": "48px",
        "64": "64px",
      },

      /**
       * Border Radius — from Primitives: radius
       */
      borderRadius: {
        "none":  "0px",
        "sm":    "2px",
        "md":    "4px",
        "lg":    "8px",
        "xl":    "12px",
        "2xl":   "16px",
        "full":  "9999px",
      },

      /**
       * Colors — Semantic Dark Theme + Primitives
       */
      colors: {
        /* --- Primitives: Blue --- */
        blue: {
          100: "#EFF6FF",
          200: "#DBEAFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
        },
        /* --- Primitives: Gray --- */
        gray: {
          50:  "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
          950: "#030712",
        },
        /* --- Primitives: Green, Red, Yellow --- */
        green: {
          400: "#34D399",
          500: "#10B981",
        },
        red: {
          400: "#F87171",
          500: "#EF4444",
        },
        yellow: {
          400: "#FBBF24",
          500: "#F59E0B",
        },

        /* --- Semantic: Background --- */
        bg: {
          app:      "#13151E",
          surface:  "#1A1D27",
          elevated: "#21242F",
          overlay:  "#000000",
        },

        /* --- Semantic: Text --- */
        text: {
          primary:   "#FFFFFF",
          secondary: "#8B8FA3",
          disabled:  "#4B5563",
        },

        /* --- Semantic: Border --- */
        border: {
          DEFAULT: "#2E3140",
          default: "#2E3140",
          strong:  "#3E4150",
        },

        /* --- Semantic: Accent --- */
        accent: {
          primary: "#60A5FA",
          success: "#34D399",
          warning: "#FBBF24",
          error:   "#F87171",
        },

        /* --- Semantic: Interactive --- */
        interactive: {
          DEFAULT: "#60A5FA",
          hover:   "#3B82F6",
          pressed: "#2563EB",
        },
      },

      /**
       * Box Shadow — elevation system for dark theme
       */
      boxShadow: {
        "sm":      "0 1px 2px 0 rgba(0, 0, 0, 0.4)",
        "md":      "0 4px 8px -1px rgba(0, 0, 0, 0.5)",
        "lg":      "0 8px 24px -2px rgba(0, 0, 0, 0.6)",
        "xl":      "0 16px 48px -4px rgba(0, 0, 0, 0.7)",
        "focus":   "0 0 0 3px rgba(96, 165, 250, 0.3)",
        "error":   "0 0 0 3px rgba(248, 113, 113, 0.3)",
      },

      /**
       * Transition — consistent animation timing
       */
      transitionTimingFunction: {
        "ease":    "cubic-bezier(0.4, 0, 0.2, 1)",
        "in":      "cubic-bezier(0.4, 0, 1, 1)",
        "out":     "cubic-bezier(0, 0, 0.2, 1)",
        "in-out":  "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "fast":   "100ms",
        "base":   "150ms",
        "slow":   "300ms",
      },

      /**
       * Z-index — layering system
       */
      zIndex: {
        "base":    "0",
        "raised":  "10",
        "dropdown": "100",
        "sticky":  "200",
        "overlay": "300",
        "modal":   "400",
        "toast":   "500",
      },
    },
  },
  plugins: [],
};

export default config;

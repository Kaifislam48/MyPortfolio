import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./constants/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        // Existing — unchanged
        bg: "#123049",
        "bg-soft": "#0a1623",
        "bg-deep": "#060d16",
        card: "rgba(28, 65, 96, 0.52)",
        neon: "#9ef2ff",
        accent: {
          cyan: "#38e0f5",
          violet: "#b794f6",
          fuchsia: "#e879f9"
        },
        // New — CSS variable driven (theme-aware)
        surface: {
          deep: "var(--color-surface-deep)",
          base: "var(--color-surface-base)",
          card: "var(--color-surface-card)"
        },
        theme: {
          primary: "var(--color-accent-primary)",
          secondary: "var(--color-accent-secondary)",
          tertiary: "var(--color-accent-tertiary)"
        }
      },
      boxShadow: {
        // Existing — unchanged
        glow: "0 0 40px rgba(56, 224, 245, 0.22), 0 0 80px rgba(183, 148, 246, 0.14)",
        "glow-lg": "0 0 60px rgba(56, 224, 245, 0.18), 0 0 120px rgba(139, 92, 246, 0.12)",
        // New — theme-aware
        "glow-theme": "0 0 40px var(--color-glow-primary), 0 0 80px var(--color-glow-secondary)",
        "glow-theme-lg": "0 0 60px var(--color-glow-primary), 0 0 120px var(--color-glow-secondary)",
        "glow-accent": "0 0 20px var(--color-glow-primary)",
        "neon-inner": "inset 0 0 20px var(--color-glow-primary)"
      },
      backgroundImage: {
        // Existing — unchanged
        "hero-gradient":
          "radial-gradient(ellipse 140% 90% at 50% -30%, rgba(56, 224, 245, 0.14), transparent 52%), radial-gradient(circle at 0% 40%, rgba(183, 148, 246, 0.2), transparent 42%), radial-gradient(circle at 100% 20%, rgba(232, 121, 249, 0.12), transparent 38%), radial-gradient(circle at 80% 85%, rgba(30, 64, 175, 0.22), transparent 45%), radial-gradient(circle at 20% 90%, rgba(56, 224, 245, 0.08), transparent 40%), linear-gradient(168deg, #060d16 0%, #0a1e2e 22%, #123049 48%, #1a4a6e 68%, #0f3550 88%, #0a1623 100%)",
        // New
        "gradient-accent":
          "linear-gradient(135deg, var(--color-accent-primary), var(--color-accent-secondary), var(--color-accent-tertiary))"
      },
      animation: {
        "aurora-drift": "aurora-drift 18s ease-in-out infinite",
        "aurora-drift-2": "aurora-drift-2 24s ease-in-out infinite",
        "aurora-drift-3": "aurora-drift-3 20s ease-in-out infinite",
        "float-particle": "float-particle 10s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "gradient-shift": "gradient-shift 5s ease infinite",
        "theme-btn-pulse": "theme-btn-pulse 2.5s ease-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

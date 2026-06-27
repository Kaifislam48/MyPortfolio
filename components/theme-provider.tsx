"use client";
import React, { createContext, useContext, useEffect, useLayoutEffect, useState } from "react";

export type ThemeName =
  | "midnight-blue"
  | "aurora"
  | "royal-purple"
  | "ocean"
  | "emerald-night"
  | "cyber-neon"
  | "sunset-gradient";

export const THEMES: { name: ThemeName; label: string; color: string }[] = [
  { name: "midnight-blue",   label: "Midnight Blue",  color: "#38e0f5" },
  { name: "aurora",          label: "Aurora",          color: "#4ade80" },
  { name: "royal-purple",    label: "Royal Purple",    color: "#c084fc" },
  { name: "ocean",           label: "Ocean",           color: "#06b6d4" },
  { name: "emerald-night",   label: "Emerald Night",   color: "#10b981" },
  { name: "cyber-neon",      label: "Cyber Neon",      color: "#ff006e" },
  { name: "sunset-gradient", label: "Sunset",          color: "#fb923c" },
];

interface ThemeContextValue {
  theme: ThemeName;
  setTheme: (t: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "midnight-blue",
  setTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<ThemeName>("midnight-blue");

  // Apply immediately before paint to prevent flash
  useLayoutEffect(() => {
    try {
      const stored = localStorage.getItem("portfolio-theme") as ThemeName | null;
      if (stored && THEMES.find((t) => t.name === stored)) {
        setThemeState(stored);
        document.documentElement.setAttribute("data-theme", stored);
      } else {
        document.documentElement.setAttribute("data-theme", "midnight-blue");
      }
    } catch {
      document.documentElement.setAttribute("data-theme", "midnight-blue");
    }
  }, []);

  // Sync to DOM + localStorage on theme change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      // ignore storage errors
    }
  }, [theme]);

  const setTheme = (t: ThemeName) => setThemeState(t);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

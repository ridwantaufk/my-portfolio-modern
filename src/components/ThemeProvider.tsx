"use client";

import { createContext, useContext, useEffect, useState, useMemo } from "react";

type Theme = "light" | "dark" | "gradient";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (savedTheme && ["light", "dark", "gradient"].includes(savedTheme)) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    localStorage.setItem("theme", theme);
    const root = document.documentElement;
    root.classList.remove("light", "dark", "gradient");
    root.classList.add(theme);

    const styles = {
      light: {
        "--bg-color": "#f0f2f5",
        "--surface-color": "#ffffff",
        "--text-color": "#2d3748",
        "--accent-color": "#667eea",
      },
      dark: {
        "--bg-color": "#1a202c",
        "--surface-color": "#2d3748",
        "--text-color": "#e2e8f0",
        "--accent-color": "#9f7aea",
      },
      gradient: {
        "--bg-color": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "--surface-color": "rgba(255, 255, 255, 0.1)",
        "--text-color": "#ffffff",
        "--accent-color": "#f093fb",
      },
    };

    const currentStyle = styles[theme];
    for (const [key, value] of Object.entries(currentStyle)) {
      root.style.setProperty(key, value);
    }
  }, [theme, mounted]);

  const themeValue = useMemo(() => ({ theme, setTheme }), [theme]);

  const bodyClassName = useMemo(() => {
    if (!mounted) return "min-h-screen bg-light-bg";
    return `min-h-screen transition-all duration-300 ${
      theme === "light"
        ? "bg-light-bg text-light-text"
        : theme === "dark"
        ? "bg-dark-bg text-dark-text"
        : "gradient-bg text-white"
    }`;
  }, [theme, mounted]);

  return (
    <ThemeContext.Provider value={themeValue}>
      <div className={bodyClassName}>{children}</div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

import { useState, useEffect, ReactNode } from "react";

import { ThemeContext } from "./ThemeContext";
import { THEME_STORAGE_KEY, Theme } from "./ThemeContext";

const getInitialTheme = () => {
  return (sessionStorage.getItem(THEME_STORAGE_KEY) as Theme) || "system";
};

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    sessionStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") {
      document.documentElement.dataset.theme = theme;
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const applySystemTheme = () => {
      document.documentElement.dataset.theme = mediaQuery.matches
        ? "dark"
        : "light";
    };

    applySystemTheme();
    mediaQuery.addEventListener("change", applySystemTheme);

    return () => mediaQuery.removeEventListener("change", applySystemTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

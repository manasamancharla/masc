import { createContext } from "react";

export type Theme = "light" | "dark" | "system";

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export const THEME_STORAGE_KEY = "theme-preference";

export const getSystemTheme = (): Theme =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

export const getInitialTheme = (): Theme => {
  return (sessionStorage.getItem(THEME_STORAGE_KEY) as Theme) || "system";
};


export type Theme = "dark" | "light"

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
    onTheme: (light: string, dark: string) => string
}
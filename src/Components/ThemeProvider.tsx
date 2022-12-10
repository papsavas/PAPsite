import { FC, PropsWithChildren } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import useLocalStorage from "../Hooks/useLocalStorage";
import { Theme } from "../types.ts/theme";
const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>("theme", "light");
  const toggleTheme = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");
  const onTheme = (light: string, dark: string) =>
    theme === "light" ? light : dark;
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, onTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

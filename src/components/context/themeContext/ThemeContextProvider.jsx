import { useState } from "react";
import { ThemeContext } from "..";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("green");

  const toggleTheme = () => {
    theme === "green" ? setTheme("light") : setTheme("green");
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark" || (storedTheme === null && prefersDarkMode);
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
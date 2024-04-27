import React, { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext<any>(null);

export const ThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = typeof window !== 'undefined' ? localStorage.getItem("theme") : null;
    setIsDarkMode(storedTheme === "dark" || (storedTheme === null && prefersDarkMode));

    const handleStorageChange = () => {
      const newTheme = localStorage.getItem("theme");
      setIsDarkMode(newTheme === "dark" || (newTheme === null && prefersDarkMode));
    };

    window.addEventListener && window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener && window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

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
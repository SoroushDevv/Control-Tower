import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("dark-mode") === "true" || window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("dark-mode", isDark);
  }, [isDark]);

  const toggle = () => setIsDark(prev => !prev);

  return { isDark, toggle, setIsDark };
};

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function CTThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("isDarkmode");
    if (stored === "true") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);


  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className="w-32 h-10 rounded-full
                 bg-light-bg-surface dark:bg-dark-bg-surface
                 flex items-center transition-all duration-300
                 shadow-surface-light dark:shadow-surface-dark"
    >
      <div
        className={`w-12 h-12 rounded-full p-1 flex items-center justify-center
                    transition-all duration-500 transform
                    ${isDark
                      ? "translate-x-full bg-dark-primary text-dark-text-inverted"
                      : "-translate-x-2 bg-light-primary text-light-text-inverted"}`}
      >
        {isDark ? <Moon size={18} /> : <Sun size={18} />}
      </div>
    </button>
  );
}

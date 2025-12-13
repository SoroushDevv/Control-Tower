import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../Contexts/ThemeContext";


export default function ThemeToggleButton() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={`relative w-20 h-10 rounded-full
        focus:outline-none focus-visible:outline-none
        bg-light-bg-surfaceAlt dark:bg-dark-bg-surfaceAlt
        transition-all duration-300
        shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-2px_-2px_4px_rgba(255,255,255,0.6)]
        dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]
        flex items-center px-1
      `}
    >
      <span
        className={`absolute top-1 left-1 w-8 h-8 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          bg-light-bg-surface dark:bg-dark-bg-surface
          shadow-md
          ${isDark ? "translate-x-10" : "translate-x-0"}`}
      >
        {isDark ? (
          <Moon size={16} className="text-dark-primary" />
        ) : (
          <Sun size={16} className="text-light-primary" />
        )}
      </span>
    </button>
  );
}

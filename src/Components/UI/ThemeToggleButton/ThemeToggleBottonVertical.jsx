import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../../Contexts/ThemeContext";

export default function ThemeToggleButtonVertical() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      aria-pressed={isDark}
      className={` w-full h-20 rounded-full
        focus:outline-none focus-visible:outline-none
        bg-light-bg-surfaceAlt dark:bg-dark-bg-surfaceAlt
        transition-all duration-300
        shadow-[inset_2px_2px_4px_rgba(0,0,0,0.15),inset_-2px_-2px_4px_rgba(255,255,255,0.6)]
        dark:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),inset_-2px_-2px_4px_rgba(255,255,255,0.05)]
        flex items-center justify-center
      `}
    >
      <span
        className={` left-1 top-1 w-8 h-8 rounded-full
          flex items-center justify-center
          transition-all duration-300 ease-out
          
          shadow-md`}
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

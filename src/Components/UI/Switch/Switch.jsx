import React from "react";

const Switch = ({ isEnabled, onToggle, disabled = false }) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={() => onToggle(!isEnabled)}
      className={`
        relative w-12 h-6 rounded-full p-1 transition-colors duration-200
        focus:outline-none focus:ring-2 focus:ring-offset-0
        disabled:opacity-50 disabled:cursor-not-allowed

        ${
          isEnabled
            ? "bg-light-primary dark:bg-dark-primary focus:ring-light-border-focus dark:focus:ring-dark-border-focus"
            : "bg-light-bg-surfaceAlt dark:bg-dark-bg-surfaceAlt border border-light-border dark:border-dark-border"
        }
      `}
    >
      <span
        className={`
          block w-4 h-4 rounded-full shadow-sm transition-transform duration-200
          bg-light-text-inverted dark:bg-dark-text-inverted
          ${isEnabled ? "translate-x-6" : "translate-x-0"}
        `}
      />
    </button>
  );
};

export default Switch;

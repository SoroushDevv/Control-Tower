import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "", disabled = false }) => {
  const base =
    "rounded-lg font-medium transition-all flex justify-center items-center px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary: `
      bg-light-primary dark:bg-dark-primary
      text-light-text-inverted dark:text-dark-text-inverted
      hover:bg-light-primary-hover dark:hover:bg-dark-primary-hover
      active:bg-light-primary-active dark:active:bg-dark-primary-active
      focus:ring-light-border-focus dark:focus:ring-dark-border-focus
    `,

    secondary: `
      bg-light-accent dark:bg-dark-accent
      text-light-text-inverted dark:text-dark-text-inverted
      hover:bg-light-accent-hover dark:hover:bg-dark-accent-hover
      active:bg-light-accent-active dark:active:bg-dark-accent-active
      focus:ring-light-border-Accent dark:focus:ring-dark-accent
    `,

    danger: `
      bg-light-state-danger dark:bg-dark-state-danger
      text-light-text-inverted dark:text-dark-text-inverted
      hover:bg-light-state-danger dark:hover:bg-dark-state-danger
      active:bg-light-state-danger dark:active:bg-dark-state-danger
      focus:ring-light-state-danger dark:focus:ring-dark-state-danger
    `,

    neutral: `
      bg-transparent
      text-light-text-primary dark:text-dark-text-primary
      border border-light-border dark:border-dark-border
      hover:bg-light-bg-surfaceAlt dark:hover:bg-dark-bg-surfaceAlt
      active:bg-light-bg-surfaceAlt dark:active:bg-dark-bg-surfaceAlt
      focus:ring-light-border-focus dark:focus:ring-dark-border-focus
    `,
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

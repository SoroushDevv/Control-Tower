import React from "react";

const Button = ({ children, onClick, variant = "primary", className = "" }) => {
  const base = "px-4 py-2 rounded font-medium transition ";
  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600"
  };

  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;

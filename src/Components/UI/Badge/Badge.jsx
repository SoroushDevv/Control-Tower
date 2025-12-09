import React from "react";

const Badge = ({ children, color = "blue" }) => {
  const colors = {
    blue: "bg-blue-500 text-white",
    green: "bg-green-500 text-white",
    red: "bg-red-500 text-white",
    gray: "bg-gray-300 text-gray-800",
  };
  return (
    <span className={`px-2 py-1 text-xs rounded-full ${colors[color] || colors.blue}`}>
      {children}
    </span>
  );
};

export default Badge;

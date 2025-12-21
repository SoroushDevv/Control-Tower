import React from "react";

const Badge = ({ children, color = "blue" ,style = ""}) => {
  const colors = {
    white:"bg-white",
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    gray: "bg-gray-300 "
  };
  return (
    <span className={`px-2 py-1 text-xs rounded-full  ${colors[color] || colors.blue} ${style}`}>
      {children}
    </span>
  );
};

export default Badge;

import React from "react";

const Spinner = ({ size = 8, color = "blue" }) => {
  const colors = {
    blue: "border-blue-500",
    red: "border-red-500",
    green: "border-green-500",
    gray: "border-gray-500",
  };

  return (
    <div
      className={`border-t-4 border-b-4 ${colors[color] || colors.blue} border-solid rounded-full animate-spin`}
      style={{ width: `${size}rem`, height: `${size}rem` }}
    ></div>
  );
};

export default Spinner;

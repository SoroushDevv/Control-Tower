import React from "react";

const Divider = ({ orientation = "horizontal", className = "" }) => {
  if (orientation === "vertical") {
    return <div className={`w-px bg-gray-300 h-full ${className}`}></div>;
  }
  return <div className={`h-px bg-gray-300 w-full ${className}`}></div>;
};

export default Divider;

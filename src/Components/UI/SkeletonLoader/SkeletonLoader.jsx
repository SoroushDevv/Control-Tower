import React from "react";

const Skeleton = ({ width = "100%", height = "1rem", className = "rounded" }) => {
  return (
    <div
      className={`bg-gray-200 animate-pulse ${className}`}
      style={{ width, height }}
    ></div>
  );
};

export default Skeleton;

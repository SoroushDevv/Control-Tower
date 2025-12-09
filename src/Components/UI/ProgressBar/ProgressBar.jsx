import React from "react";

const ProgressBar = ({ progress = 0, color = "blue", height = "0.5rem" }) => {
  const colors = {
    blue: "bg-blue-500",
    red: "bg-red-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };

  return (
    <div className="w-full bg-gray-200 rounded" style={{ height }}>
      <div
        className={`${colors[color] || colors.blue} rounded`}
        style={{ width: `${progress}%`, height }}
      ></div>
    </div>
  );
};

export default ProgressBar;

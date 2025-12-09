import React from "react";

const Switch = ({ enabled, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(!enabled)}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors ${
        enabled ? "bg-blue-500" : "bg-gray-300"
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow transform transition-transform ${
          enabled ? "translate-x-6" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default Switch;

import React from "react";

const Checkbox = ({ label, checked, onChange, disabled = false, color = "blue" }) => {
  const colors = {
    blue: "text-blue-500",
    red: "text-red-500",
    green: "text-green-500",
    gray: "text-gray-500",
  };

  return (
    <label className={`inline-flex items-center gap-2 ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}>

      {label && <span>{label}</span>}
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        className={`form-checkbox ${colors[color] || colors.blue} h-5 w-5`}
      />
    </label>
  );
};

export default Checkbox;

import React from "react";

const TextArea = ({
  value,
  onChange,
  placeholder = "",
  rows = 4,
  className = "",
  label,
}) => {
  return (
    <div className="flex flex-col w-full">
      {label && <label className="mb-1 font-medium text-gray-700">{label}</label>}
      <textarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none ${className}`}
      />
    </div>
  );
};

export default TextArea;

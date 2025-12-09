import React from "react";

const SearchBar = ({ value, onChange, placeholder = "جستجو..." }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
    />
  );
};

export default SearchBar;

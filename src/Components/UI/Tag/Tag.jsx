import React from "react";

const Tag = ({ children, onRemove }) => {
  return (
    <span className="inline-flex items-center bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2 mb-2">
      {children}
      {onRemove && (
        <button onClick={onRemove} className="ml-2 text-gray-500 hover:text-gray-700">✕</button>
      )}
    </span>
  );
};

export default Tag;

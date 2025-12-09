import React from "react";

const Pagination = ({ totalPages = 1, currentPage = 1, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex gap-2">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-3 py-1 rounded border ${
            page === currentPage
              ? "bg-blue-500 text-white border-blue-500"
              : "bg-white text-gray-700 border-gray-300"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

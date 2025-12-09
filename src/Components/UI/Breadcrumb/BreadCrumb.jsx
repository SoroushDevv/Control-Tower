import React from "react";

const Breadcrumb = ({ items = [] }) => {
  return (
    <nav className="flex text-gray-500 text-sm">
      {items.map((item, idx) => (
        <span key={idx} className="flex items-center">
          {idx > 0 && <span className="mx-2">/</span>}
          {item.link ? (
            <a href={item.link} className="hover:text-blue-500">{item.label}</a>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumb;

import React, { useState } from "react";

const Tabs = ({ tabs = [], initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  return (
    <div>
      <div className="flex border-b border-gray-300">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`px-4 py-2 -mb-px ${
              idx === activeIndex ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="p-4">{tabs[activeIndex]?.content}</div>
    </div>
  );
};

export default Tabs;

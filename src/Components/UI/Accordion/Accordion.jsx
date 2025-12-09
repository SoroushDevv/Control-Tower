import React, { useState } from "react";

const Accordion = ({ items = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-2">
      {items.map((item, idx) => (
        <div key={idx} className="border border-gray-300 rounded">
          <button
            className="w-full px-4 py-2 text-left flex justify-between items-center"
            onClick={() => toggle(idx)}
          >
            {item.title}
            <span>{openIndex === idx ? "-" : "+"}</span>
          </button>
          {openIndex === idx && <div className="px-4 py-2">{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

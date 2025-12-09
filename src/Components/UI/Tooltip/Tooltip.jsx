import React, { useState } from "react";

const Tooltip = ({ content, children }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="relative inline-block"
         onMouseEnter={() => setVisible(true)}
         onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-sm rounded">
          {content}
        </div>
      )}
    </div>
  );
};

export default Tooltip;

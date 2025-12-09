import React, { useState, useRef, useEffect } from "react";

const Popover = ({ content, children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={ref}>
      <div onClick={() => setOpen(!open)}>{children}</div>
      {open && (
        <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded shadow-lg p-2">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;

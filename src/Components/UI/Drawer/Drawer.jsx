import React from "react";

const Drawer = ({ isOpen, onClose, children, position = "right", width = "w-80" }) => {
  const positions = {
    right: "right-0 top-0 h-full",
    left: "left-0 top-0 h-full",
    top: "top-0 left-0 w-full",
    bottom: "bottom-0 left-0 w-full",
  };

  return isOpen ? (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black opacity-30"
        onClick={onClose}
      ></div>
      <div className={`fixed bg-white shadow-lg p-4 ${positions[position]} ${width}`}>
        {children}
      </div>
    </div>
  ) : null;
};

export default Drawer;

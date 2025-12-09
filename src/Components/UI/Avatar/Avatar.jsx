import React from "react";

const Avatar = ({ src, alt, size = 10 }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover`}
      style={{ width: `${size}rem`, height: `${size}rem` }}
    />
  );
};

export default Avatar;

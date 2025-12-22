import { useState, useEffect } from "react";

const StarBorder = ({
  as: Component = "card",
  className = "",
  color = "red",   // رنگ متن و محتوا
  speed = "6s",
  thickness = 3,
  children,
  ...rest
}) => {
  const [theme, setTheme] = useState("light");

  // تشخیص مود دارک یا لایت
  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // رنگ ستاره‌ها (دایمی چرخان)
  const starColor = "#FF4D4D"; // قرمز

  // انتخاب رنگ متن/آیکون
  const getContentColor = () => {
    if (theme === "dark") return `text-dark-text-primary`;
    return `text-light-text-primary`;
  };

  // انتخاب پس زمینه
  const getBgColor = () => {
    if (theme === "dark") return `bg-dark-bg-surface border-dark-border`;
    return `bg-light-bg-surface border-light-border`;
  };

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{
        padding: `${thickness}px 0`,
        ...rest.style,
      }}
      {...rest}
    >
      {/* حلقه پایین دایمی چرخان */}
      <div
        className="absolute w-[300%] h-[300%] rounded-full z-0 animate-spin-slow"
        style={{
          background: `radial-gradient(circle, ${starColor}, transparent 10%)`,
          animationDuration: speed,
        }}
      ></div>

      {/* حلقه بالا دایمی چرخان */}
      <div
        className="absolute w-[350%] h-[350%] rounded-full z-0 animate-spin-slow"
        style={{
          background: `radial-gradient(circle, ${starColor}, transparent 10%)`,
          animationDuration: `calc(${speed} * 1.5)`,
        }}
      ></div>

      {/* محتوای اصلی */}
      <div
        className={`relative z-1 text-center text-[16px] py-[16px] px-[26px] rounded-[20px] ${getBgColor()} ${getContentColor()}`}
      >
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;

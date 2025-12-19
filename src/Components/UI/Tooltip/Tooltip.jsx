import React from "react";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { useTheme } from "../../../Contexts/ThemeContext";

const Tooltip = ({ content, children }) => {
  const {isDark} = useTheme()
  return (
    <Tippy
      content={
        <div className="relative px-2 py-1 text-sm rounded">
          {content}
        </div>
      }
      theme="light"
      placement="left"
      arrow={true}
      animation="shift-away"
      delay={0}
      hideDelay={0}
      offset={[0,30]}
      className="hover:text-light-text-primary hover:dark:text-dark-text-primary"
    >
      {children}
    </Tippy>
  );
};

export default Tooltip;

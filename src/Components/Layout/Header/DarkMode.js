import React from "react";
import "./DarkMode.css";

const DarkMode = ({ isDark, setIsDark }) => {
  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onClick={() => setIsDark(!isDark)}
        />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkMode;

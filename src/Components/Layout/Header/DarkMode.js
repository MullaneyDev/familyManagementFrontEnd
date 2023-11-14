import React from "react";
import "./DarkMode.css";

const DarkMode = ({ isDark, setIsDark }) => {
  function onClickDark() {
    setIsDark(!isDark);
    if (!isDark) {
      document.body.style.backgroundColor = "rgb(21, 21, 112)";
    } else document.body.style.backgroundColor = "white";
  }
  return (
    <div className="toggle-theme-wrapper">
      <label className="toggle-theme" htmlFor="checkbox">
        <input type="checkbox" id="checkbox" onClick={onClickDark} />
        <div className="slider round"></div>
      </label>
    </div>
  );
};

export default DarkMode;

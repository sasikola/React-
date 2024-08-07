import classNames from "classnames";
import React, { useState } from "react";

function ThemeChanger() {
  const [theme, setTheme] = useState(false);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <>
      <div className={`${theme ? "bg-black" : "bg-white"}`}>
        <button
          className={` p-2 rounded-md cursor-pointer text-white 
            ${theme ? "bg-black" : "bg-white text-black"
          }`}
          onClick={toggleTheme}
        >
          {theme ? "White mode" : "Dark mode"}
        </button>
      </div>
    </>
  );
}

export default ThemeChanger;

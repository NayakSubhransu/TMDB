import { useState, useEffect } from "react";

import './style.css';

const Darkmode = () => {
  const [isOn, setIsOn] = useState(localStorage.theme === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isOn);
  }, [isOn]);

  function handleClick() {
    const newTheme = isOn ? "light" : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.theme = newTheme;
    setIsOn(!isOn);
  }

  return (
    <div className="bg-[#021e34]">
      <div className="flex items-center gap-2 mr-4 mt-0 pb-2">
        <span className="ml-auto text-sm">Dark Mode</span>
        <button onClick={handleClick} className={`toggle-btn ${isOn ? 'on' : 'off'}`}>
          {isOn ? 'On' : 'Off'}
        </button>
      </div>
    </div>
  );
};

export default Darkmode;
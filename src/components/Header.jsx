import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useState, useEffect } from "react";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between mx-10 py-10">
      <h1 className="uppercase text-xl text-white font-bold tracking-widest">
        To do App
      </h1>
      <button onClick={() => setDarkMode(!darkMode)} className="text-white">
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
};

export default Header;

import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";
import { useState, useEffect } from "react";

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between mx-10 py-10 md:max-w-2xl md:mx-auto">
      <h1 className="uppercase text-xl text-white font-bold tracking-widest">
        Todo App
      </h1>
      <button onClick={() => setDarkMode(!darkMode)} className="text-white">
        {darkMode ? <SunIcon /> : <MoonIcon />}
      </button>
    </header>
  );
};

export default Header;

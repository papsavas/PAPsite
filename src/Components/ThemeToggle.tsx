"use client";
import { FC, useEffect } from "react";
import useTheme from "../Hooks/useTheme";

const ThemeToggle: FC<{}> = () => {
  const { theme, toggleTheme } = useTheme();

  useEffect(() =>
    console.log(`ThemeToggle: ${theme} | ls:${localStorage.getItem("theme")}`)
  );
  return (
    <div className="hover:cursor-pointer">
      <div
        className={`flex w-16 h-6 ${
          theme === "dark"
            ? "bg-gradient-to-l from-slate-700 to-slate-500"
            : "bg-gradient-to-r from-white to-yellow-100 "
        } rounded-full transition-all duration-500`}
        onClick={toggleTheme}
      >
        <span
          className={`flex self-center h-8 w-8 ${
            theme === "dark"
              ? "bg-gray-200 ml-8 outline-3 outline-gray-100"
              : "bg-yellow-200 outline-dotted outline-yellow-200"
          } rounded-full shadow-lg  outline-2 transition-all duration-500`}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;

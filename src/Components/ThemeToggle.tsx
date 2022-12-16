"use client";
import { FC } from "react";
import useTheme from "../Hooks/useTheme";

const ThemeToggle: FC<{}> = () => {
  const { toggleTheme } = useTheme();
  return (
    <div className="hover:cursor-pointer">
      <div
        className={`flex w-16 h-6 
          bg-gradient-to-r from-white to-yellow-100
          dark:bg-gradient-to-l dark:from-slate-700 dark:to-slate-500
         rounded-full transition-all duration-500`}
        onClick={toggleTheme}
      >
        <span
          className={`flex self-center h-8 w-8 
            bg-yellow-200 outline-dotted outline-yellow-200
            dark:bg-gray-200 dark:ml-8 dark:outline-3 dark:outline dark:outline-gray-100
          rounded-full shadow-lg  outline-2 transition-all duration-500`}
        />
      </div>
    </div>
  );
};

export default ThemeToggle;

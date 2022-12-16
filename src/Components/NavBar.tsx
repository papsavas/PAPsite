import { FC } from "react";
import "../styles/globals.css";
import ThemeToggle from "./ThemeToggle";

//TODO: rename
const NavBar: FC<{}> = () => {
  return (
    <div className={`min-w-full pb-12`}>
      <div
        className={`absolute right-0 mt-4 mr-[8%] py-4 px-3 rounded-2xl 
          bg-[#424549] dark:bg-gray-600 hover:shadow-md hover:scale-95 transition-all duration-300`}
      >
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

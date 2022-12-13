import { FC } from "react";
import useTheme from "../Hooks/useTheme";
import "../styles/globals.css";
import ThemeToggle from "./ThemeToggle";

const NavBar: FC<{}> = () => {
  const { onTheme } = useTheme();

  return (
    <div className={`min-w-full pb-12`}>
      <div
        className={`absolute right-0 mt-4 mr-[8%] py-4 px-3 rounded-2xl ${onTheme(
          `bg-[#424549]`,
          `bg-gray-600`
        )} hover:shadow-md hover:scale-95 transition-all duration-300`}
      >
        <div className="">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

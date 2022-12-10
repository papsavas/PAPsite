import { FC } from "react";
import useTheme from "../Hooks/useTheme";
import "../styles/globals.css";
import ThemeToggle from "./ThemeToggle";

const NavBar: FC<{}> = () => {
  const routes = ["home", "music", "code"] as const;
  const { onTheme } = useTheme();

  return (
    <div className={`relative ${onTheme(`bg-[#424549]`, `bg-gray-600`)} mb-12`}>
      <div className="flex flex-row overflow-x-auto justify-center items-center gap-[8%]">
        {routes.map((r, i) => (
          <a
            href={r === "home" ? `/` : `/${r}`} // "/" +
            className={`text-white text-2xl px-6 py-2 m-1 capitalize rounded-2xl hover:bg-gray-800 hover:shadow-lg`}
            key={i}
          >
            {r}
          </a>
        ))}
        {/* 
          //TODO!: On top when resizing. Make it same level but not affecting route positioning and spacing 
        */}
        <div className="absolute right-0 mr-28">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
};

export default NavBar;

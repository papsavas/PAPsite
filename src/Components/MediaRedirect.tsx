import { FC } from "react";
import useTheme from "../Hooks/useTheme";
import { SocialMedia } from "../types.ts/socialMedia";

const MediaRedirect: FC<SocialMedia> = ({ name, redirect, iconPath }) => {
  const { onTheme } = useTheme();
  return (
    <a
      href={redirect}
      target="_blank"
      // onClick={navigate}
      className={`
        flex flex-row items-center  w-56 px-5 rounded-2xl
        hover:shadow-md hover:cursor-pointer
        ${onTheme(
          "text-black hover:bg-gray-200",
          "text-white, hover:bg-slate-600"
        )}
        hover:shadow-md hover:cursor-pointer
       `}
    >
      <img src={iconPath} className="h-12 w-12" />
      <p
        className={`pl-2 ${onTheme("text-black", "text-slate-300")}
     `}
      >
        {name}
      </p>
    </a>
  );
};

export default MediaRedirect;

import { FC } from "react";
import useTheme from "../Hooks/useTheme";

const GridSection: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const { onTheme } = useTheme();
  return (
    <div
      className={`flex flex-col items-center justify-around break-all
        w-96 h-52 shadow-md border-2 rounded-3xl cursor-pointer
     ${onTheme(
       "text-slate-600 bg-gray-50 border-gray-100 hover:bg-gray-100",
       "text-slate-200 bg-slate-700 border-gray-600 hover:bg-slate-600"
     )} 
     hover:shadow-xl`}
    >
      <h2 className="text-5xl">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default GridSection;

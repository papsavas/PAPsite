import { FC } from "react";
import useTheme from "../Hooks/useTheme";

const GridSection: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  const { onTheme } = useTheme();
  return (
    <div
      className={`
        w-96 h-52 shadow-md border-2 rounded-3xl cursor-pointer p-6
     ${onTheme(
       "text-slate-600 bg-gray-50 border-gray-100 hover:bg-gray-100",
       "text-slate-200 bg-slate-700 border-gray-600 hover:bg-slate-600"
     )} 
    group hover:shadow-lg hover:scale-110 transition-transform duration-300`}
    >
      <div className="flex flex-col items-center break-all">
        <h2 className="text-5xl mb-5">{title}</h2>
        {/* // TODO: space evenly */}
        <p
          className="place-self-center max-h-24 overflow-auto [&::-webkit-scrollbar]:hidden
         opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default GridSection;

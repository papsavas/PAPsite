import { FC } from "react";
import { Link } from "react-router-dom";

const GridSection: FC<{ title: string; path: string; description: string }> = ({
  title,
  path,
  description,
}) => {
  return (
    <Link
      to={path}
      className={`
        w-[86%] h-56 px-6
        shadow-md border-2 rounded-3xl 
        cursor-pointer
      bg-grid dark:bg-grid-dark
      hover:bg-gray-100 dark:hover:bg-slate-600
      border-border dark:border-border-dark 
        group hover:shadow-lg hover:scale-110 transition-transform duration-300`}
    >
      <div
        className="flex flex-col justify-items-center items-center break-words 
       text-text dark:text-text-dark"
      >
        <h2 className="text-2xl my-4">{title}</h2>
        {/* // TODO: space evenly */}
        <p
          className="h-32 rounded-xl opacity-90 overflow-auto 
        [&::-webkit-scrollbar]:hidden"
        >
          {description}
        </p>
      </div>
    </Link>
  );
};

export default GridSection;

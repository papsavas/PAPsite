import { FC } from "react";

const GridSection: FC<{ title: string; path: string; description: string }> = ({
  title,
  path,
  description,
}) => {
  return (
    <a
      href={path}
      className={`
        w-[86%] h-56 px-6
        shadow-md border-2 rounded-3xl 
        cursor-pointer
       text-slate-600 bg-gray-50 border-gray-100 hover:bg-gray-100
       dark:text-slate-200 dark:bg-slate-700 dark:border-gray-600 dark:hover:bg-slate-600
    group hover:shadow-lg hover:scale-110 transition-transform duration-300`}
    >
      <div className="flex flex-col justify-items-center items-center break-all">
        <h2 className="text-xl my-4">{title}</h2>
        {/* // TODO: space evenly */}
        <p className="h-32 rounded-xl my-auto overflow-auto [&::-webkit-scrollbar]:hidden">
          {description}
        </p>
      </div>
    </a>
  );
};

export default GridSection;

import { FC } from "react";

const GridSection: FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <div
      className={`
        w-[90%] h-48 px-6
        shadow-md border-2 rounded-3xl 
        cursor-pointer
       text-slate-600 bg-gray-50 border-gray-100 hover:bg-gray-100
       dark:text-slate-200 dark:bg-slate-700 dark:border-gray-600 dark:hover:bg-slate-600
    group hover:shadow-lg hover:scale-110 transition-transform duration-300`}
    >
      <div className="flex flex-col justify-items-center items-center break-all">
        <h2 className="text-xl my-4">{title}</h2>
        {/* // TODO: space evenly */}
        <p
          className="h-24 my-auto overflow-auto [&::-webkit-scrollbar]:hidden
         opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default GridSection;

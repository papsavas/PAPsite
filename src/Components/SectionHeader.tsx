import { FC } from "react";

const SectionHeader: FC<{ name: string }> = ({ name }) => {
  return (
    <div className="capitalize text-center text-7xl text-black dark:text-slate-300">
      {name}
    </div>
  );
};

export default SectionHeader;

import { FC } from "react";
import { GithubRepo } from "../types/github";

const Repo: FC<GithubRepo> = ({
  name,
  description,
  stargazers_count,
  html_url,
}) => {
  return (
    <a
      href={html_url}
      target="_blank"
      className="flex flex-col justify-evenly gap-2 h-full py-3 px-5 text-text dark:text-text-dark 
      bg-grid dark:bg-grid-dark rounded-lg min-w-full group"
    >
      <div className="flex flex-row items-center justify-evenly  min-w-full">
        <div>User Img</div>
        <h2 className="font-bold">{name}</h2>
      </div>
      <p className="">{description}</p>
      <div className="flex flex-row items-center gap-1">
        <h2 className="">{stargazers_count}</h2>
        <div className="group-hover:animate-bounce">⭐</div>
      </div>
    </a>
  );
};

export default Repo;

import useSWR from "swr";
import { fetchGithubRepos } from "../api/fetcher";
import Repo from "../Components/Repo";
import SectionHeader from "../Components/SectionHeader";
import { GithubRepo } from "../types/github";

const Code = () => {
  const { data, error, isLoading } = useSWR("gh-repos", fetchGithubRepos);
  const sortStars = (a: GithubRepo, b: GithubRepo) =>
    b.stargazers_count - a.stargazers_count;
  if (isLoading) return <>Loading...</>;
  return (
    <div>
      <SectionHeader name="Code" />
      <div className="flex flex-col gap-3 mt-10 mx-5">
        <p className="text-2xl text-center text-text dark:text-text-dark">
          Repositories:
        </p>
        <div className="grid grid-flow-cols grid-cols-2 lg:grid-cols-4 place-items-center gap-10">
          {data?.sort(sortStars).map((d) => (
            <Repo {...d} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Code;

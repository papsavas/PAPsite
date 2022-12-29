import GridSection from "../Components/GridSection";
import MediaRedirect from "../Components/MediaRedirect";
import { gridSectionData } from "../values/gridSection.json";
import { socialMedia } from "../values/socialMedia.json";

const Home = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          src="/IMG_2172PH4.jpg"
          className="h-48 w-48 object-fill rounded-full pointer-events-none"
          alt="pic"
        ></img>
      </div>
      <div className="flex justify-center">
        <h1
          className={`font-extrabold text-7xl text-transparent bg-clip-text bg-gradient-to-tr
          from-gray-700 to-gray-400 dark:from-gray-600 dark:to-gray-400
           `}
        >
          paqsavaƨ
        </h1>
      </div>
      <div
        className={`flex justify-center text-3xl m-5 text-text dark:text-text-dark`}
      >
        <p>Savvas Papageorgiadis</p>
      </div>
      <div
        className={`grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 place-items-center gap-[7%] mx-[10%] my-28`}
      >
        {gridSectionData.map((data) => (
          <GridSection {...data} />
        ))}
      </div>
      <div className={`flex flex-col justify-center items-center pt-10 pb-20 `}>
        <div
          className={`flex flex-col space-y-4 py-4 px-1 shadow-md border-2  rounded-3xl
              bg-grid border-border
              dark:bg-grid-dark dark:border-border-dark
            `}
        >
          {socialMedia.map((sm) => (
            <MediaRedirect {...sm} />
          ))}
        </div>
      </div>
      <footer className="flex justify-center self-end pb-5 italic font-light">
        <div className="text-slate-500 text-sm">
          Icons provided by{" "}
          <a
            href="https://icons8.com"
            target="_blank"
            className="underline underline-offset-2 text-slate-400"
          >
            icons8
          </a>
        </div>
      </footer>
    </>
  );
};

export default Home;

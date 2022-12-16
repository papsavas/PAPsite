import { gridSectionData } from "../values/gridSection.json";
import { socialMedia } from "../values/socialMedia.json";
import GridSection from "./GridSection";
import MediaRedirect from "./MediaRedirect";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <div
        className={`min-h-screen min-w-screen 
          bg-white
          dark:bg-gray-800
        `}
      >
        <NavBar />
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
          className={`flex justify-center text-3xl m-5 text-slate-700 dark:text-slate-300`}
        >
          <p>Savvas Papageorgiadis</p>
        </div>
        <div
          className={`grid grid-flow-col grid-cols-2 place-items-center gap-[20%] mx-[12%] my-20`}
        >
          {gridSectionData.map((data) => (
            <GridSection {...data} />
          ))}
        </div>
        <div
          className={`flex flex-col justify-center items-center pt-10 pb-20 `}
        >
          <div
            className={`flex flex-col space-y-4 py-4 px-1 shadow-md border-2  rounded-3xl
              bg-gray-50 border-gray-100
              dark:bg-slate-700 dark:border-gray-600
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
              className="underline underline-offset-2 text-slate-400"
            >
              icons8
            </a>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;

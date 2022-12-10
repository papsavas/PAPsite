import { FC } from "react";
import MediaRedirect from "./Components/MediaRedirect";
import NavBar from "./Components/NavBar";
import useTheme from "./Hooks/useTheme";
import "./styles/globals.css";
import { socialMedia } from "./values/socialMedia.json";

const App: FC<{}> = () => {
  const { onTheme } = useTheme();

  return (
    <div className={`min-h-full ${onTheme("bg-white", "bg-gray-800")}`}>
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
          ${onTheme("from-gray-700 to-gray-400", "from-gray-600 to-gray-400")}
           `}
        >
          paqsavaƨ
        </h1>
      </div>
      <div
        className={`flex justify-center text-3xl p-10 ${onTheme(
          "text-black",
          "text-slate-300"
        )}`}
      >
        <p>Savvas Papageorgiadis</p>
      </div>
      <div className={`flex flex-col justify-center items-center pt-10 pb-20 `}>
        <div
          className={`flex flex-col space-y-4 py-4 px-1 shadow-md border-2  rounded-3xl bg-gray-50 ${onTheme(
            "bg-white border-gray-100",
            "bg-slate-700 border-gray-600"
          )}`}
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
  );
};

export default App;

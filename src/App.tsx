import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import useTheme from "./Hooks/useTheme";
import Code from "./pages/Code";
import Home from "./pages/Home";
import Music from "./pages/Music";
import "./styles/globals.css";

const App: FC<{}> = () => {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <div
        className={`min-h-screen min-w-screen 
          bg-background dark:bg-background-dark
        `}
      >
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music" element={<Music />} />
            <Route path="/code" element={<Code />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;

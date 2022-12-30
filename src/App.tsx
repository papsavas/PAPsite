import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "./Components/Fallback";
import Pane from "./Components/Pane";
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
        className={`min-h-screen min-w-screen scroll-smooth
          bg-background dark:bg-background-dark
        `}
      >
        <Pane>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/music" element={<Music />} />
              <Route path="/code" element={<Code />} />
              {/* //* for testing */}
              <Route path="/loading" element={<Fallback />} />
            </Routes>
          </BrowserRouter>
        </Pane>
      </div>
    </div>
  );
};

export default App;

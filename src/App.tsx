import { FC } from "react";
import Home from "./Components/Home";
import useTheme from "./Hooks/useTheme";
import "./styles/globals.css";

const App: FC<{}> = () => {
  const { theme } = useTheme();
  return (
    <div className={theme}>
      <Home />
    </div>
  );
};

export default App;

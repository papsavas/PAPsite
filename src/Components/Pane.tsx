import { FC, ReactNode } from "react";
import NavBar from "./NavBar";

const Pane: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default Pane;

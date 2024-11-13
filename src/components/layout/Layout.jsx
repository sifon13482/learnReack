import { Outlet } from "react-router-dom";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <ProgressBar />
      <footer></footer>
    </div>
  );
};

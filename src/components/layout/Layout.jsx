import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <ProgressBar />
      <footer></footer>
    </div>
  );
};

import { ThemeContextProvider } from "../context/themeContext/ThemeContextProvider";
import { Header } from "../header/Header";
import { ProgressBar } from "../progressBar/ProgressBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <ThemeContextProvider>
        <Header />
        {children}
      </ThemeContextProvider>
      <ProgressBar />
      <footer></footer>
    </div>
  );
};

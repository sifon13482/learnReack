import { ToggleThemeButton } from "../context/themeContext/ToggleThemeButton";
import { ThemeContextProvider } from "../context/themeContext/ThemeContextProvider";
import { LoginButton } from "../loginButton/LoginButton";
import { ExitButton } from "../exitButton/ExitButton";
import { useLogin } from "../context/loginContext/useLogin";
import { UserName } from "../userName/UserName";

export const Layout = ({ children }) => {
  const { currentUserName } = useLogin();
  return (
    <div>
      <ThemeContextProvider>
        <header>
          <ToggleThemeButton />
          {!currentUserName && <LoginButton />}
          {currentUserName && <ExitButton />}
          {currentUserName && <UserName />}
        </header>
        {children}
      </ThemeContextProvider>
      <footer></footer>
    </div>
  );
};

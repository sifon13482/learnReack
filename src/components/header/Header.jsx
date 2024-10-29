import { ToggleThemeButton } from "../context/themeContext/ToggleThemeButton";
import { ExitButton } from "../exitButton/ExitButton";
import { LoginButton } from "../loginButton/LoginButton";
import { UserName } from "../userName/UserName";
import { useLogin } from "../context/loginContext/useLogin";

export const Header = () => {
  const { currentUserName } = useLogin();
  return (
    <header>
      <ToggleThemeButton />
      {!currentUserName && <LoginButton />}
      {currentUserName && <ExitButton />}
      {currentUserName && <UserName />}
    </header>
  );
};

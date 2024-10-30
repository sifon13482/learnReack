import { ToggleThemeButton } from "../context/themeContext/ToggleThemeButton";
import { ExitButton } from "../exitButton/ExitButton";
import { LoginButton } from "../loginButton/LoginButton";
import { UserName } from "../userName/UserName";

export const Header = () => {
  return (
    <header>
      <ToggleThemeButton />
      <LoginButton />
      <ExitButton />
      <UserName />
    </header>
  );
};

import { Link } from "react-router-dom";
import { Cart } from "../cart/Cart";
import { ToggleThemeButton } from "../context/themeContext/ToggleThemeButton";
import { ExitButton } from "../exitButton/ExitButton";
import { LoginButton } from "../loginButton/LoginButton";
import { UserName } from "../userName/UserName";
import { Clock } from "../clock/clock";

export const Header = () => {
  return (
    <header>
      <Clock />
      <Link to={`/`}>Main Page</Link>
      <ToggleThemeButton />
      <Link to={`restaurants`}>Rertaurants</Link>
      <LoginButton />
      <ExitButton />
      <UserName />
      <Cart />
    </header>
  );
};

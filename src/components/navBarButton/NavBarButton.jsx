import styles from "./navBarButton.module.css";
import classNames from "classnames";
import { useTheme } from "../context/themeContext/useTheme";

export const NavBarButton = ({ title, isActiv, onClick, className }) => {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(className, {
        [styles.navButtonLight]: theme === "light",
      })}
      disabled={isActiv}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

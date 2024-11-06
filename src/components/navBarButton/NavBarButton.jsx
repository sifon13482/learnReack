import styles from "./navBarButton.module.css";
import classNames from "classnames";
import { useTheme } from "../context/themeContext/useTheme";

export const NavBarButton = ({ title, isActive, onClick, className }) => {
  const { theme } = useTheme();

  return (
    <button
      className={classNames(className, {
        [styles.navButtonLight]: theme === "light",
      })}
      disabled={isActive}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

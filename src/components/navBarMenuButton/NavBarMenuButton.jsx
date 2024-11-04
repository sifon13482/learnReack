import styles from "./navBarMenu.module.css";
import classNames from "classnames";

export const NavBarMenuButton = ({ title, onClick, className }) => {
  return (
    <button className={classNames(className, styles.button)} onClick={onClick}>
      {title}
    </button>
  );
};
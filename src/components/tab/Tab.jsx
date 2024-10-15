import styles from "./tab.module.css";
import classNames from "classnames";

export const Tab = ({ titleTab, isActiv, onClick }) => {
  return (
    <button className={classNames(styles.tab)} disabled={isActiv} onClick={onClick}>
      {titleTab}
    </button>
  );
};

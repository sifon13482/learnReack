import styles from "./tab.module.css";

export const Tab = ({ titleTab, isActiv, onClick }) => {
  return (
    <button className={styles.tab} disabled={isActiv} onClick={onClick}>
      {titleTab}
    </button>
  );
};

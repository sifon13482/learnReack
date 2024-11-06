import styles from "./tab.module.css";
import { NavBarButton } from "../navBarButton/NavBarButton";

export const Tab = ({ titleTab, isActive, onClick }) => {
  return (
    <NavBarButton
      title={titleTab}
      isActive={isActive}
      onClick={onClick}
      className={styles.tab}
    />
  );
};

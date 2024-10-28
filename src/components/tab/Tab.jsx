import styles from "./tab.module.css";
import { NavBarButton } from "../navBarButton/NavBarButton";

export const Tab = ({ titleTab, isActiv, onClick }) => {
  return (
    <NavBarButton
      title={titleTab}
      isActiv={isActiv}
      onClick={onClick}
      className={styles.tab}
    />
  );
};

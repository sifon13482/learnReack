import styles from "./tab.module.css";
import { NavBarButton } from "../navBarButton/NavBarButton";
import { useNavigate } from "react-router-dom";

export const Tab = ({ id, titleTab }) => {
  const navigate = useNavigate();

  return (
    <NavBarButton
      title={titleTab}
      onClick={() => navigate(id)}
      className={styles.tab}
    />
  );
};

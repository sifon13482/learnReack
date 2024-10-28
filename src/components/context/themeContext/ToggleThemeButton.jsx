import { NavBarButton } from "../../navBarButton/NavBarButton";
import { useTheme } from "./useTheme";
import styles from "./toggleThemeButton.module.css";

export const ToggleThemeButton = () => {
  const { toggleTheme } = useTheme();
  return (
    <NavBarButton
      onClick={toggleTheme}
      title={"Toggle"}
      className={styles.button}
    />
  );
};

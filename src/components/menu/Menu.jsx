import styles from "./menu.module.css";
import { DishCounter } from "../dishCounter/DishCounter";
import { useLogin } from "../context/loginContext/useLogin";

export const Menu = ({ menu }) => {
  const { currentUserName } = useLogin();

  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {menu.map((dish) => (
          <li className={styles.listItem}>
            {dish.name} {currentUserName && <DishCounter />}
          </li>
        ))}
      </ul>
    </div>
  );
};

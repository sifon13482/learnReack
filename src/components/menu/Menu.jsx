import styles from "./menu.module.css";
import { Dish } from "../dish/dish";

export const Menu = ({ dishesIds }) => {

  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {dishesIds.map((dishId) => (
          <li className={styles.listItem}>
            <Dish dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};

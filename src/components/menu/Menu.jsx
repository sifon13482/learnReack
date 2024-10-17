import styles from "./menu.module.css";
import { DishCounter } from "../dishCounter/DishCounter";

export const Menu = ({ menu }) => {

    return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {menu.map((dish) => (
          <li className={styles.listItem}>
            {dish.name} <DishCounter />
          </li>
        ))}
      </ul>
    </div>
  ); 
};

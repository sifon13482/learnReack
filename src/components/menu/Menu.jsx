import classNames from "classnames";
import styles from "./menu.module.css";
import { DishCounter } from "../dishCounter/DishCounter";

export const Menu = ({ menu }) => {

    return (
    <div className={classNames(styles.menu)}>
      <h3 className={classNames(styles.title)}>Меню</h3>
      <ul className={classNames(styles.list)}>
        {menu.map((dish) => (
          <li className={classNames(styles.listItem)}>
            {dish.name} <DishCounter />
          </li>
        ))}
      </ul>
    </div>
  ); 
};

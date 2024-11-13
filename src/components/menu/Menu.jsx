import styles from "./menu.module.css";
import { useRestaurantLink } from "../useRestaurantLink/useRestaurantLink";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectDishes } from "../../redux/dishes";

export const Menu = () => {
  const { menu } = useRestaurantLink();
  const dishes = useSelector(selectDishes);

  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {menu.map((dishId) => (
          <li className={styles.listItem}>
            <Link to={`/dish/${dishId}`}>{dishes[dishId].name}</Link>
            {console.log(menu)}
          </li>
        ))}
      </ul>
    </div>
  );
};

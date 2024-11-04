import styles from "./menu.module.css";
import { DishCounter } from "../dishCounter/DishCounter";
import { useLogin } from "../context/loginContext/useLogin";
import { useSelector } from "react-redux";
import { selectDishes } from "../../redux/dishes";

export const Menu = ({ dishesId }) => {
  const dishes = useSelector(selectDishes);
  const { currentUserName } = useLogin();

  return (
    <div className={styles.menu}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {dishesId.map((dishId) => (
          <li className={styles.listItem}>
            {dishes[dishId].name}
            {currentUserName && <DishCounter id={dishes[dishId].id}/>}
          </li>
        ))}
      </ul>
    </div>
  );
};
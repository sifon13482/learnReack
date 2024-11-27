import styles from "./menu.module.css";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectDishes, selectDishesRequstStatus } from "../../redux/dishes";
import { useEffect } from "react";
import { getDishes } from "../../redux/dishes/getDishes";

export const MenuPage = () => {
  const { restaurantId } = useParams();
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishes(restaurantId));
  }, [dispatch, restaurantId]);
  
  const requestStatus = useSelector(selectDishesRequstStatus);
  const dishes = useSelector(selectDishes);
  const dishesArr = Object.values(dishes)
  
  if (requestStatus === "rejected") {
    return <div>ERROR MenuPage</div>;
  }

  if (requestStatus === "pending" || requestStatus === "idle") {
    return <div>LOADING MenuPage</div>;
  }
 
  if (requestStatus === "fulfilled") {

    return (
      <div className={styles.menu}>
      <h3 className={styles.title}>Меню</h3>
      <ul className={styles.list}>
        {dishesArr.map(({id, name}) => (
          <li className={styles.listItem} key={id}>
            <Link to={`/dish/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
    );
  }
};
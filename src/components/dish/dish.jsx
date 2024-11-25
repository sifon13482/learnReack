import { useDispatch, useSelector } from "react-redux";
import {
  selectDishes,
  selectDishesBiId,
  selectDishesRequstStatus,
} from "../../redux/dishes";
import { useLogin } from "../context/loginContext/useLogin";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
// import { getDish } from "../../redux/dish/getDish";
import { DishCounter } from "../dishCounter/DishCounter";
import { getDish } from "../../redux/dishes/getDish";

export const Dish = () => {
  const { dishId } = useParams();
  const { currentUserName } = useLogin();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDish(dishId));
  }, [dispatch, dishId]);

   const requestStatus = useSelector(selectDishesRequstStatus);
  const dish = useSelector((state) => selectDishesBiId(state, dishId));

  if (requestStatus === "rejectedDish" || requestStatus === "idle") {
    return <div>ERROR Dish</div>;
  }
  console.log(requestStatus);

  if (requestStatus === "pendingDish") {
    return <div>LOADING Dish</div>;
  }
  console.log(dish);
  console.log(requestStatus);

  if (requestStatus === "fulfilledDish") {
    return (
      <div>
        name: {dish.name}
        <br></br>
        price: {dish.price}
        <br></br>
        ingredients: {dish.ingredients}
        {currentUserName && <DishCounter id={dish.id} />}
      </div>
    );
  }
};

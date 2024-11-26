import { useDispatch, useSelector } from "react-redux";
import { selectDishesById, selectDishesRequstStatus } from "../../redux/dishes";
import { useLogin } from "../context/loginContext/useLogin";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { DishCounter } from "../dishCounter/DishCounter";
import { getDishById } from "../../redux/dishes/getDish";

export const Dish = () => {
  const { dishId } = useParams();
  const { currentUserName } = useLogin();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDishById(dishId));
  }, [dispatch, dishId]);

  const requestStatus = useSelector(selectDishesRequstStatus);
  const dish = useSelector((state) => selectDishesById(state, dishId));

  if (requestStatus === "rejectedDish" || requestStatus === "idle") {
    return <div>ERROR Dish</div>;
  }

  if (requestStatus === "pendingDish") {
    return <div>LOADING Dish</div>;
  }

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
};

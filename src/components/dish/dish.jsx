import { useDispatch, useSelector } from "react-redux";
import { selectDishes, selectDishesRequstStatus } from "../../redux/dishes";
import { useLogin } from "../context/loginContext/useLogin";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getDish } from "../../redux/dish/getDish";
import { DishCounter } from "../dishCounter/DishCounter";

export const Dish = () => {
  const { dishId } = useParams();
  const { currentUserName } = useLogin();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDish(dishId));
  }, [dispatch, dishId]);

  // const requestStatus = useSelector(selectDishRequstStatus);
  // const dish = useSelector(selectDish);

  const requestStatus = useSelector(selectDishesRequstStatus);
  const dishes = useSelector(selectDishes);

  if (requestStatus === "rejected") {
    return <div>ERROR Dish</div>;
  }
  if (requestStatus === "pending" || requestStatus === "idle") {
    return <div>LOADING Dish</div>;
  }
  return (
    <div>
      name: {dishes[dishId].name}
      <br></br>
      price: {dishes[dishId].price}
      <br></br>
      ingredients: {dishes[dishId].ingredients}
      {currentUserName && <DishCounter id={dishes[dishId].id} />}
    </div>
  );
};

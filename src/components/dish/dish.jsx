import { useSelector } from "react-redux";
import { selectDishes } from "../../redux/dishes";
import { useLogin } from "../context/loginContext/useLogin";
import { DishCounter } from "../dishCounter/DishCounter";
import { useParams } from "react-router-dom";

export const Dish = () => {
  const { dishId } = useParams();

  const dishes = useSelector(selectDishes);
  const { currentUserName } = useLogin();
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

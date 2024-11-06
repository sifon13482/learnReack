import { useSelector } from "react-redux";
import { selectDishes } from "../../redux/dishes";
import { useLogin } from "../context/loginContext/useLogin";
import { DishCounter } from "../dishCounter/DishCounter";

export const Dish = ({dishId}) => {
  const dishes = useSelector(selectDishes);
  const { currentUserName } = useLogin();

  return (
    <div>
      {dishes[dishId].name}
      {currentUserName && <DishCounter id={dishes[dishId].id} />}
    </div>
  );
};

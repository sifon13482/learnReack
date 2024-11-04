import { useDispatch, useSelector } from "react-redux";
import { Counter } from "../counter/Counter";
// import { useCounter } from "./useCounter";
import {
  addToCart,
  removeFromCart,
  selectAmountById,
} from "../../redux/ui/cart";

export const DishCounter = ({ id }) => {
  // const {value, increment, decrement} = useCounter()
  const amount = useSelector((state) => selectAmountById(state, id));

  const dispatch = useDispatch();

  const increment = () => dispatch(addToCart(id));
  const decrement = () => dispatch(removeFromCart(id));

  return <Counter value={amount} increment={increment} decrement={decrement} />;
};

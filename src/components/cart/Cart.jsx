import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/ui/cart";
import { CartItem } from "../cartItem/CartItem";
import { DishCounter } from "../dishCounter/DishCounter";

export const Cart = () => {
  const item = useSelector(selectCartItems);

  if (!item.length) return null;

  return (
    <ul>
      {item.map(({ id, amount }) => (
        <li key={id}>
          <CartItem id={id} amount={amount} />
          <DishCounter id={id}/>
        </li>
      ))}
    </ul>
  );
};

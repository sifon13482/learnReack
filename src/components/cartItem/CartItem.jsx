import { useSelector } from "react-redux";
import { selectDishesBiId } from "../../redux/dishes";

export const CartItem = ({ id, amount }) => {
  const { name } =
    useSelector((state) => selectDishesBiId(state, id)) || {};

  if (!name) return null;

  return (
    <div>
      {name} - {amount}
    </div>
  );
};

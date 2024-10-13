import { DishCounter } from "../dishCounter/DishCounter";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li>
            {dish.name} <DishCounter />
          </li>
        ))}
      </ul>
    </div>
  );
};

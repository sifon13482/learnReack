import { DishCounter } from "../dishCounter/DishCounter";

export const Menu = ({ menu }) => {

  // return <h1>{menu}</h1>;

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

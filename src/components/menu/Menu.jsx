import { Count } from "../count/Count";

export const Menu = ({ menu }) => {
  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li>{dish.name} <Count/></li>
        ))}
      </ul>
    </div>
  );
};
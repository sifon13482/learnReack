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

/* 
  return (
    <div>
      {name}
      <h3>Меню</h3>
      <ul>
        {menu.map((dish) => (
          <li>{dish.name}</li>
        ))}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {reviews.map((comment) => (
          <li>{comment.text}</li>
        ))}
      </ul>
    </div>
  );
*/

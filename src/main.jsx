import { createRoot } from "react-dom/client";

import { restaurants } from "./materials/mock";

createRoot(document.getElementById("root")).render(
  restaurants.map((restaurant) => (
    <div>
      {restaurant.name}
      <h3>Меню</h3>
      <ul>
        {restaurant.menu.map((dish) => (
          <li>{dish.name}</li>
        ))}
      </ul>
      <h3>Отзывы</h3>
      <ul>
        {restaurant.reviews.map((comment) => (
          <li>{comment.text}</li>
        ))}
      </ul>
    </div>
  ))
);

import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Tab } from "../tab/Tab";
import { Restaurant } from "./Restaurant";

export const RestaurantPage = () => {
  const [displayRestaurantId, setDisplayRestaurantId] = useState(
    restaurants[0].id
  );
  const displayRestaurant = restaurants.find(
    ({ id }) => id === displayRestaurantId
  );

  return (
    <div>
      {restaurants.map(({ name, id }) => (
        <Tab
          key={id}
          titleTab={name}
          isActiv={displayRestaurantId === id}
          onClick={() => setDisplayRestaurantId(id)}
        />
      ))}
      <Restaurant
        name={displayRestaurant.name}
        key={displayRestaurant.id}
        menu={displayRestaurant.menu}
        reviews={displayRestaurant.reviews}
      />
    </div>
  );
};

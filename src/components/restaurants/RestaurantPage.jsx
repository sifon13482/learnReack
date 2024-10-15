import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { TitleCafe } from "../titleCafe/TitleCafe";

import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Tab } from "../tab/Tab";
import { Restaurants } from "./Restaurants";

export const RestaurantPage = (/* { titleTab } */) => {
  const [displayRestaurantId, setDisplayRestaurantId] = useState(
    restaurants[0].id
  );

  const displayRestaurant = restaurants.find(
    ({ id }) => id === displayRestaurantId
  );
  // setDisplayRestaurantId(restaurants[displayRestaurantId].id);

  /* {restaurants.map(({ name, menu, reviews }) => ())} */

  return (
    <div>
      {restaurants.map(({ name, id }) => (
        <Tab
          key={id}
          titleTab={name}
          isActiv={displayRestaurantId === id}
          onClick={() =>
            setDisplayRestaurantId(restaurants[displayRestaurantId].id)
          }
        />
      ))}
      <TitleCafe name={displayRestaurant.name} />
      <Menu menu={displayRestaurant.menu} />
      <Reviews reviews={displayRestaurant.reviews} />
      {/* <Restaurants
        name={displayRestaurant.name}
        menu={displayRestaurant.menu}
        reviews={displayRestaurant.reviews}
      /> */}
    </div>
  );
};

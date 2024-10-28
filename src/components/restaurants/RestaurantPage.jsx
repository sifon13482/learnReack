import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { TitleCafe } from "../titleCafe/TitleCafe";
import { useState } from "react";
import { restaurants } from "../../constants/mock";
import { Tab } from "../tab/Tab";
import { ProgressBar } from "../progressBar/ProgressBar";

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
        <TitleCafe name={displayRestaurant.name} />
        <Menu key={displayRestaurant.id} menu={displayRestaurant.menu} />
        <Reviews reviews={displayRestaurant.reviews} />
        <ProgressBar />
    </div>
  );
};

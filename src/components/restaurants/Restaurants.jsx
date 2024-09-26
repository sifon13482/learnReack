import { restaurants } from "../../constants/mock";
import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { TitleCafe } from "../titleCafe/TitleCafe";

export const Restaurants = () => {
  return (
    <div>
      {restaurants.map(({ name, menu, reviews }) => (
        <div>
          <TitleCafe name={name} />
          <Menu menu={menu} />
          <Reviews reviews={reviews} />
        </div>
      ))}
    </div>
  );
};

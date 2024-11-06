import { Menu } from "../menu/Menu";
import { Reviews } from "../reviews/Reviews";
import { TitleCafe } from "../titleCafe/TitleCafe";
import { useSelector } from "react-redux";
import { selectRestaurantsById } from "../../redux/restaurants";

export const Restaurant = ({ id }) => {
  const restaurant = useSelector((state) => 
    selectRestaurantsById(state, id));

  return (
    <div>
      <TitleCafe name={restaurant.name} />
      <Menu key={id} dishesIds={restaurant.menu} />
      <Reviews reviewsId={restaurant.reviews} />
    </div>
  );
};

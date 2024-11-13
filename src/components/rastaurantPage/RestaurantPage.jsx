import { RestaurantContainer } from "../restaurantContainer/RestaurantContainer";
import { useParams } from "react-router-dom";

export const RestaurantPage = () => {
  const { restaurantsId } = useParams();

  return <RestaurantContainer id={restaurantsId} />;

};

import { Restaurant } from "../restaurants/Restaurant";
import { useRestaurantIdFromURL } from "../useRestaurantLink/useRestaurantLink";

export const RestaurantContainer = () => {
  const { name, menu, reviews } = useRestaurantIdFromURL();

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};

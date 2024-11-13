import { Restaurant } from "../restaurants/Restaurant";
import { useRestaurantLink } from "../useRestaurantLink/useRestaurantLink";

export const RestaurantContainer = () => {
  const { name, menu, reviews } = useRestaurantLink();

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};

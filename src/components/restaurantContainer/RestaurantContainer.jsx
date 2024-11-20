import { Restaurant } from "../restaurants/Restaurant";
import { useRestaurantIdFromURL } from "../useRestaurantLink/useRestaurantLink";

export const RestaurantContainer = () => {
  const { name, menu, reviews } = useRestaurantIdFromURL();
  // if(!name || !menu || !reviews) return null


  return <Restaurant name={name} menu={menu} reviews={reviews} />;
  // return (
  //   <Restaurant
  //     name={restaurantItem.name}
  //     menu={restaurantItem.menu}
  //     reviews={restaurantItem.reviews}
  //   />
  // );
};

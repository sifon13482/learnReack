import { useDispatch } from "react-redux";
import { Restaurant } from "../restaurants/Restaurant";
import { useRestaurantIdFromURL } from "../useRestaurantLink/useRestaurantLink";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/getRestaurants";

export const RestaurantContainer = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      dispatch(getRestaurants())
  }, [dispatch])
  console.log(useRestaurantIdFromURL())
  const { name, menu, reviews } = useRestaurantIdFromURL();

  return <Restaurant name={name} menu={menu} reviews={reviews} />;
};

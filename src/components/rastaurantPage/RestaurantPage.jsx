import { useDispatch, useSelector } from "react-redux";
import { RestaurantContainer } from "../restaurantContainer/RestaurantContainer";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/getRestaurants";
import { selectRestaurantsById } from "../../redux/restaurants";

export const RestaurantPage = () => {
  const { restaurantsId } = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRestaurants());
  // }, [dispatch]);

  const restaurantItem = useSelector((state) =>
    selectRestaurantsById(state, restaurantsId)
  );
  console.log("restaurantItem", restaurantItem);

  return <RestaurantContainer id={restaurantsId} />;
};

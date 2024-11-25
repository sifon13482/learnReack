import { Restaurant } from "../restaurants/Restaurant";
import { useParams } from "react-router-dom";
import { /* useDispatch, */ useSelector } from "react-redux";
// import { useEffect } from "react";
// import { getRestaurantId } from "../../redux/restaurantId/getRestaurantId";
import {
  selectRestaurantsById,
  selectRestaurantsRequstStatus,
} from "../../redux/restaurants";

export const RestaurantPage = () => {
  const { restaurantId } = useParams();

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getRestaurantId(restaurantId));
  // }, [dispatch, restaurantId]);

  const requestStatus = useSelector(selectRestaurantsRequstStatus);
  const { name } = useSelector((state) =>
    selectRestaurantsById(state, restaurantId)
  );
  if (requestStatus === "pending" || requestStatus === "idle") {
    return <div>LOADING RestaurantPage</div>;
  }
  if (requestStatus === "fulfilled") {
    return <Restaurant name={name} />;
  }
};

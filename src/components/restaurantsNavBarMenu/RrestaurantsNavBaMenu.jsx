import { Tab } from "../tab/Tab";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRestaurants,
  selectRestaurantsIds,
  selectRestaurantsRequstStatus,
} from "../../redux/restaurants";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/getRestaurants";

export const RestaurantsNavBarMenu = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);

  const restaurantsId = useSelector(selectRestaurantsIds);
  const restaurants = useSelector(selectRestaurants);
  const requestStatus = useSelector(selectRestaurantsRequstStatus)

  // if (requestStatus === "idle" || requestStatus === "loading") {
  //   return console.log("loading")
  // }

  return (
    <div>
      {restaurantsId.map((id) => (
        <Tab id={id} key={id} titleTab={restaurants[id].name} />
      ))}
      <Outlet />
    </div>
  );
};

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

  const requestStatus = useSelector(selectRestaurantsRequstStatus);
  const restaurantsIds = useSelector(selectRestaurantsIds);
  const restaurants = useSelector(selectRestaurants);

  if (requestStatus === "pending" || requestStatus === "idle") {
    return <div>LOADING RestaurantsNavBarMenu</div>;
  }

  if (requestStatus === "fulfilled") {
    return (
      <div>
        {restaurantsIds.map((id) => (
          <Tab id={id} key={id} titleTab={restaurants[id].name} />
        ))}
        <Outlet />
      </div>
    );
  }
};

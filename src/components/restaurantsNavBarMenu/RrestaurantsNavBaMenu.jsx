import { Tab } from "../tab/Tab";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectRestaurants,
  selectRestaurantsIds,
} from "../../redux/restaurants";

export const RestaurantsNavBarMenu = () => {
  const restaurantsId = useSelector(selectRestaurantsIds);
  const restaurants = useSelector(selectRestaurants);

  return (
    <div>
      {restaurantsId.map((id) => (
        <Tab id={id} key={id} titleTab={restaurants[id].name} />
      ))}
      <Outlet />
    </div>
  );
};

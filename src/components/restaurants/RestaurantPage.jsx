import { useState } from "react";
import { Tab } from "../tab/Tab";
import { Restaurant } from "./Restaurant";
import { useSelector } from "react-redux";
import { selectRestaurants, selectRestaurantsIds } from "../../redux/restaurants";

export const RestaurantPage = () => {
  const restaurantsId = useSelector(selectRestaurantsIds);
  const restaurants = useSelector(selectRestaurants);

  const [displayRestaurantId, setDisplayRestaurantId] = useState(
    restaurantsId[0]
  );

  return (
    <div>
      {restaurantsId.map(( nameId ) => (
        <Tab
          key={nameId}
          titleTab={restaurants[nameId].name} 
          isActiv={displayRestaurantId === nameId}
          onClick={() => setDisplayRestaurantId(nameId)}
        />
      ))}
      <Restaurant id={displayRestaurantId} key={displayRestaurantId} />
    </div>
  );
};

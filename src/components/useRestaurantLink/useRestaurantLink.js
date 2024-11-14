import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantsById } from "../../redux/restaurants";


export const useRestaurantIdFromURL = () => {
    const { restaurantsId } = useParams();
   const restaurantItem = useSelector((state) =>
        selectRestaurantsById(state, restaurantsId)
    )
    return ( restaurantItem )
};

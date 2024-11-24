import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantsById, selectRestaurantsRequstStatus } from "../../redux/restaurants";
import { useEffect } from "react";
import { getRestaurantId } from "../../redux/restaurantId/getRestaurantId";


export const useRestaurantIdFromURL = () => {
    const { restaurantsId } = useParams();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRestaurantId(restaurantsId))
    }, [dispatch, restaurantsId])

    const requestStatus = useSelector(selectRestaurantsRequstStatus)
    const restaurantItem = useSelector((state) =>
        selectRestaurantsById(state, restaurantsId)
    );
    if (requestStatus === "idle") {
        return "idle"
    };
    if (requestStatus === "pending") {
        return "pending"
    };
    if (requestStatus === "fulfilled") {
        console.log("restaurantItem", restaurantItem)
        return restaurantItem;
    }
};

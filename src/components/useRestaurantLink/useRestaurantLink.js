import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRestaurantsById } from "../../redux/restaurants";
import { useEffect } from "react";
import { getRestaurants } from "../../redux/restaurants/getRestaurants";


export const useRestaurantIdFromURL = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getRestaurants())
    }, [dispatch])

    const { restaurantsId } = useParams();
    console.log(restaurantsId);



    const restaurantItem = useSelector((state) =>
        selectRestaurantsById(state, restaurantsId)
    );
    console.log(restaurantItem);
    return (restaurantItem);
};

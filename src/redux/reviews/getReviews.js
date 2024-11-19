import { createAsyncThunk } from "@reduxjs/toolkit";
import { useRestaurantIdFromURL } from "../../components/useRestaurantLink/useRestaurantLink";
import { useParams } from "react-router-dom";

// const { restaurantItem } = useRestaurantIdFromURL;
// const { restaurantsId } = useParams();
export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async (_, { dispatch, getState, rejectWithValue }) => {
        const response = await fetch("http://localhost:3001/api/reviews?restaurantId=a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2");
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data")
            return
        };
        return result;
    }
)
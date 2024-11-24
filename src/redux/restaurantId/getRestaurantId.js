import { createAsyncThunk } from "@reduxjs/toolkit";
// import { selectRestaurantsById } from ".";

export const getRestaurantId = createAsyncThunk(
    "restaurantId/getRestaurantId",
    async (restaurantId, { dispatch, getState, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001//api/restaurant/${restaurantId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no DATA")
            return
        };

        return result;
    },
    {
        // condition: ({ getState }) => {
        //     return (
        //         selectRestaurantsById(getState()).length === 0 /* ||
        //         selectReviewsForRestaurant(getState()) !== restaurantId */);
        // }
    }
)
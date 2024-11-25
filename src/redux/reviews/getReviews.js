import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectReviews } from ".";

export const getReviews = createAsyncThunk(
    "reviews/getReviews",
    async (restaurantId, { dispatch, getState, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data")
            return
        };
        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectReviews(getState()).length !== 0
        }
    }
)


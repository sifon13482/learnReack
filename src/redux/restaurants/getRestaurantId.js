import { createAsyncThunk } from "@reduxjs/toolkit";

export const getRestaurantId = createAsyncThunk(
    ":restaurantsId/getRestaurantId",
    async (restaurantsId, { dispatch, getState, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/restaurant/${restaurantsId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no DATA")
            return
        };

        return result;
    }
)
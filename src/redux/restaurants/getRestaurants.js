import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantsById, selectRestaurantsIds } from ".";

export const getRestaurants = createAsyncThunk(
    "restaurants/getRestaurants",
    async (_, { rejectWithValue }) => {
        const response = await fetch("http://localhost:3001/api/restaurants");
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no data")
            return
        };

        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectRestaurantsIds(getState()).length === 0
        }
    }
);

export const getRestaurantById = createAsyncThunk(
    "restaurantId/getRestaurantId",
    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001//api/restaurant/${restaurantId}`);
        const result = await response.json();

        if (!result.length) {
            rejectWithValue("no DATA")
            return
        };

        return result;
    },
    {
        condition: (_, { getState }) => {
            return selectRestaurantsById(getState()) !== undefined
        }
    }
)
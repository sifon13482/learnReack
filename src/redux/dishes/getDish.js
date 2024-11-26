import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDishById = createAsyncThunk(
    "dish/getDishById",
    async (dishId, { rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        const result = await response.json();

        if (!result) {
            rejectWithValue("no DATA")
            return
        };

        return result;
    },
)
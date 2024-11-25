import { createAsyncThunk } from "@reduxjs/toolkit";

export const getDish = createAsyncThunk(
    "dish/getDish",
    async (dishId, { dispatch, getState, rejectWithValue }) => {
        const response = await fetch(`http://localhost:3001/api/dish/${dishId}`);
        const result = await response.json();

        // if (!result.length) {
        //     rejectWithValue("no DATA")
        //     return
        // };

        return result;
    },
)
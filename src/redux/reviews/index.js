import { createSlice } from "@reduxjs/toolkit";
// import { normalizedReviews } from "../../constants/normalized-mock";
import { getReviews } from "./getReviews";

const initialState = {
    entities: {}
}

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: {
        selectReviews: (state) => state.entities,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getReviews.pending, (state) => {
                state.requestStatus = "pending";

            })
            .addCase(getReviews.fulfilled, (state, { payload }) => {
                state.entities = payload.reduce((acc, item) => {
                    acc[item.id] = item;

                    return acc;
                }, {}),
                    state.requestStatus = "fulfilled";
            })
            .addCase(getReviews.rejected, (state) => {
                state.requestStatus = "rejected";

            })
});

export const { selectReviews } = reviewsSlice.selectors;
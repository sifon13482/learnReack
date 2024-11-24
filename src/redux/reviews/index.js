import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviews } from "./getReviews";

const entityAdapter = createEntityAdapter();


export const reviewsSlice = createSlice({
    name: "reviews",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectReviews: (state) => state.entities,
        selectReviewsRequstStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getReviews.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getReviews.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
                state.requestStatus = "fulfilled";
            })
            .addCase(getReviews.rejected, (state) => {
                state.requestStatus = "rejected";

            })
});

export const {
    selectReviews, selectReviewsRequstStatus
} = reviewsSlice.selectors;
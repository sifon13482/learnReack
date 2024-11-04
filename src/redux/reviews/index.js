import { createSlice } from "@reduxjs/toolkit";
import { normalizedReviews } from "../../constants/normalized-mock";

const initialState = {
    entities: normalizedReviews.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {})
}

export const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    selectors: {
        selectReviews: (state) => state.entities,
    },
});

export const { selectReviews } = reviewsSlice.selectors;
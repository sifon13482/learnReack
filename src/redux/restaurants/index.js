import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";

const entityAdapter = createEntityAdapter()

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantsById: (state, id) => state.entities[id],
        selectRestaurants: (state) => state.entities,
        selectRestaurantsRequstStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getRestaurants.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
                state.requestStatus = "fulfilled";
            })
            .addCase(getRestaurants.rejected, (state) => {
                state.requestStatus = "rejected";
            })
});

export const {
    selectRestaurantsIds,
    selectRestaurantsById,
    selectRestaurants,
    selectRestaurantsRequstStatus,
} = restaurantsSlice.selectors;
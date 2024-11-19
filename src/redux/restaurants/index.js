import { createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./getRestaurants";

const initialState = {
    entities: {},
    ids: [],
    requestStatus: "idle",
};

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
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
                state.entities = payload.reduce((acc, item) => {
                    acc[item.id] = item;

                    return acc;
                }, {}),

                    state.ids = payload.map(({ id }) => id),
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
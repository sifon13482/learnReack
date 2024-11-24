import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectDishes: (state) => state.entities,
        selectDishesBiId: (state, id) => state.entities[id],
        selectDishesRequstStatus: (state) => state.requestStatus,
    },
    extraReducers: (builder) =>
        builder
            .addCase(getDishes.pending, (state) => {
                state.requestStatus = "pending";
            })
            .addCase(getDishes.fulfilled, (state, { payload }) => {
                entityAdapter.setAll(state, payload);
                state.requestStatus = "fulfilled";
            })
            .addCase(getDishes.rejected, (state) => {
                state.requestStatus = "rejected";

            })
});

export const {
    selectDishes, selectDishesBiId, selectDishesRequstStatus
} = dishesSlice.selectors;
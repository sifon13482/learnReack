import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";
import { getDish } from "./getDish";

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
                entityAdapter.setMany(state, payload);
                state.requestStatus = "fulfilled";
            })
            .addCase(getDishes.rejected, (state) => {
                state.requestStatus = "rejected";
            })
            .addCase(getDish.pending, (state) => {
                state.requestStatus = "pendingDish";
            })
            .addCase(getDish.fulfilled, (state, { payload }) => {
                entityAdapter.updateOne(state, payload);
                state.requestStatus = "fulfilledDish";
            })
            .addCase(getDish.rejected, (state) => {
                state.requestStatus = "rejected";
            })
});

export const {
    selectDishes, selectDishesBiId, selectDishesRequstStatus
} = dishesSlice.selectors;
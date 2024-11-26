import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getDishes } from "./getDishes";
import { getDishById } from "./getDish";

const entityAdapter = createEntityAdapter();

export const dishesSlice = createSlice({
    name: "dishes",
    initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
    selectors: {
        selectDishes: (state) => state.entities,
        selectDishesById: (state, id) => state.entities[id],
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
            .addCase(getDishById.pending, (state) => {
                state.requestStatus = "pendingDish";
            })
            .addCase(getDishById.fulfilled, (state, { payload }) => {
                entityAdapter.setOne(state, payload);
                state.requestStatus = "fulfilledDish";
            })
            .addCase(getDishById.rejected, (state) => {
                state.requestStatus = "rejected";
            })
});

export const {
    selectDishes, selectDishesById, selectDishesRequstStatus
} = dishesSlice.selectors;
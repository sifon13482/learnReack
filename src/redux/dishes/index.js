import { createSlice } from "@reduxjs/toolkit";
import { normalizedDishes } from "../../constants/normalized-mock";

const initialState = {
    entities: normalizedDishes.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
}

export const dishesSlice = createSlice({
    name: "dishes",
    initialState,
    selectors: {
        selectDishes: (state) => state.entities,
        selectDishesBiId: (state, id) => state.entities[id],
    },
});

export const { selectDishes, selectDishesBiId } = dishesSlice.selectors;
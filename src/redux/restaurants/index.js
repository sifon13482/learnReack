import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../constants/normalized-mock";

const initialState = {
    entities: normalizedRestaurants.reduce((acc, item) => {
        acc[item.id] = item;

        return acc;
    }, {}),
    ids: normalizedRestaurants.map(({ id }) => id),
    // name: normalizedRestaurants.map(({ name }) => name),
}

export const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState,
    selectors: {
        selectRestaurantsIds: (state) => state.ids,
        selectRestaurantsById: (state, id) => state.entities[id],
        selectRestaurants: (state) => state.entities,
    }
});

export const { selectRestaurantsIds, selectRestaurantsById, selectRestaurants } =
    restaurantsSlice.selectors;
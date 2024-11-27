import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./dishes";
import { restaurantsSlice } from "./restaurants";
import { reviewsSlice } from "./reviews";
import { cartSlice } from "./ui/cart";

export const store = configureStore({
    reducer: {
        [restaurantsSlice.name]: restaurantsSlice.reducer,
        [dishesSlice.name]: dishesSlice.reducer,
        [reviewsSlice.name]: reviewsSlice.reducer,
        [cartSlice.name]: cartSlice.reducer,


    },
})
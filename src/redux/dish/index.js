// import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
// import { getDish } from "./getDish";

// const entityAdapter = createEntityAdapter();

// export const dishSlice = createSlice({
//     name: "dish",
//     initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
//     selectors: {
//         selectDish: (state) => state.entities,
//         selectDishBiId: (state, id) => state.entities[id],
//         selectDishRequstStatus: (state) => state.requestStatus,
//     },
//     extraReducers: (builder) =>
//         builder
//             .addCase(getDish.pending, (state) => {
//                 state.requestStatus = "pending";
//             })
//             .addCase(getDish.fulfilled, (state, { payload }) => {
//                 entityAdapter.setAll(state, payload);
//                 state.requestStatus = "fulfilled";
//             })
//             .addCase(getDish.rejected, (state) => {
//                 state.requestStatus = "rejected";

//             })
// });

// export const {
//     selectDish, selectDishBiId, selectDishRequstStatus
// } = dishSlice.selectors;
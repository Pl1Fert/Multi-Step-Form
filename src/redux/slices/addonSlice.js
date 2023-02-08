import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addonSlice = createSlice({
    name: "addons",
    initialState,
    reducers: {
        addAddon: (state, action) => [...state, action.payload],
        removeAddon: (state, action) =>
            state.filter((item) => item !== action.payload),
    },
});

const { actions, reducer } = addonSlice;

export default reducer;
export const { addAddon, removeAddon } = actions;

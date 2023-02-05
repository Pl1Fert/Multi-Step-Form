import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    step: 1,
};

const stepSlice = createSlice({
    name: "step",
    initialState,
    reducers: {
        nextStep: (state) => {
            state.step += 1;
        },
        previousStep: (state) => {
            state.step -= 1;
        },
    },
});

export const { actions, reducer } = stepSlice;

export default reducer;
export const { nextStep, previousStep } = actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    planId: null,
    planType: "monthly",
};

const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        changePlanType: (state, action) =>
            (state = { ...state, planType: action.payload }),
        changePlanId: (state, action) =>
            (state = { ...state, planId: action.payload }),
    },
});

const { actions, reducer } = planSlice;

export default reducer;
export const { changePlanId, changePlanType } = actions;

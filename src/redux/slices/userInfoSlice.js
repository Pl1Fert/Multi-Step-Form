import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    phone: "",
};

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState,
    reducers: {
        updateUserInfo: (state, action) => (state = action.payload),
    },
});

const { actions, reducer } = userInfoSlice;

export default reducer;

export const { updateUserInfo } = actions;

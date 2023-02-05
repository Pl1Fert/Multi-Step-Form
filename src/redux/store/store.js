import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "../slices/stepSlice";
import userInfoSlice from "../slices/userInfoSlice";

const store = configureStore({
    reducer: {
        steps: stepSlice,
        userInfo: userInfoSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;

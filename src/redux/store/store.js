import { configureStore } from "@reduxjs/toolkit";
import stepSlice from "../slices/stepSlice";
import userInfoSlice from "../slices/userInfoSlice";
import planSlice from "../slices/planSlice";

const store = configureStore({
    reducer: {
        steps: stepSlice,
        userInfo: userInfoSlice,
        plan: planSlice,
    },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    phoneNumber: '',
};

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateUserInfo: (state, action) => {
            return {...action.payload};
        }
    }
})

const {actions, reducer} = userInfoSlice;

export default reducer;

export const {updateUserInfo} = actions;
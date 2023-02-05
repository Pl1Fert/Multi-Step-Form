import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../../MyInput/MyInput";

const UserInfo = () => {
    const userInfo = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="stepTitle">Personal info</h1>
            <p className="stepDescription">
                Please provide your name, email address, and phone number.
            </p>
            <label htmlFor="name">Name</label>
            <MyInput 
                type="text" 
                placeholder="e.g. Stephen King" 
                name="name" 
            />
            <label htmlFor="email">Email Address</label>
            <MyInput
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                name="email"
            />
            <label htmlFor="phone">Phone Number</label>
            <MyInput
                type="tel"
                placeholder="e.g. +1 234 567 890"
                name="phone"
                pattern=""
            />
        </div>
    );
};

export default UserInfo;

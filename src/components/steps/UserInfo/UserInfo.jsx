import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../../MyInput/MyInput";
import classes from "./UserInfo.module.css";
import { updateUserInfo } from "../../../redux/slices/userInfoSlice";

const UserInfo = () => {
    const userInfo = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    const [data, setData] = useState(userInfo);

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });

        //TODO: handle next step without empty fields
        dispatch(updateUserInfo(data));
    };

    return (
        <div>
            <h1 className="stepTitle">Personal info</h1>
            <p className="stepDescription">
                Please provide your name, email address, and phone number.
            </p>
            <label htmlFor="name" className={classes.label}>
                Name
            </label>
            <MyInput
                type="text"
                placeholder="e.g. Stephen King"
                name="name"
                value={data.name}
                onChange={onChange}
            />
            <label htmlFor="email" className={classes.label}>
                Email Address
            </label>
            <MyInput
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                name="email"
                value={data.email}
                onChange={onChange}
            />
            <label htmlFor="phone" className={classes.label}>
                Phone Number
            </label>
            <MyInput
                type="tel"
                placeholder="e.g. +1 234 567 890"
                name="phone"
                value={data.phone}
                onChange={onChange}
            />
        </div>
    );
};

export default UserInfo;

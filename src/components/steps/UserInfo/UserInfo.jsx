import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MyInput from "../../MyInput/MyInput";
import classes from "./UserInfo.module.css";
import { updateUserInfo } from "../../../redux/slices/userInfoSlice";
import Controls from "../../Controls/Controls";
import { isValidPhoneNumber } from "libphonenumber-js";
import swal from "sweetalert";

const UserInfo = () => {
    const userInfo = useSelector((state) => state.userInfo);
    const dispatch = useDispatch();

    const [data, setData] = useState(userInfo);

    const onChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
    };

    const isInfoValid = (data) => {
        let regexp;
        for (let key in data) {
            switch (key) {
                case "name":
                    continue;
                case "email":
                    regexp =
                        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
                    if (regexp.test(data[key]) === false) return false;

                    continue;
                case "phone":
                    if (isValidPhoneNumber(data[key]) === false) return false;

                    continue;
                default:
                    return false;
            }
        }

        return true;
    };

    const nexthandler = () => {
        if (Object.values(data).some((it) => !it)) {
            swal({
                title: "Oops...",
                text: "Enter your name, email and phone number!",
                icon: "error",
                button: "Close",
            });

            return false;
        } else if (isInfoValid(data) === false) {
            swal({
                title: "Oops...",
                text: "Enter your name, email and phone number correctly!",
                icon: "error",
                button: "Close",
            });

            return false;
        }

        dispatch(updateUserInfo(data));
        return true;
    };

    return (
        <div className="userInfoStep">
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
                onChange={(e) => onChange(e)}
            />
            <label htmlFor="email" className={classes.label}>
                Email Address
            </label>
            <MyInput
                type="email"
                placeholder="e.g. stephenking@lorem.com"
                name="email"
                value={data.email}
                onChange={(e) => onChange(e)}
            />
            <label htmlFor="phone" className={classes.label}>
                Phone Number
            </label>
            <MyInput
                type="tel"
                placeholder="e.g. +1 234 567 890"
                name="phone"
                value={data.phone}
                onChange={(e) => onChange(e)}
            />
            <Controls handler={nexthandler} />
        </div>
    );
};

export default UserInfo;

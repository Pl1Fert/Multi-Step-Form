import React, { useEffect, useState } from "react";
import classes from "./AddOnItem.module.css";
import checkmark from "../../assets/images/icon-checkmark.svg";
import { useDispatch, useSelector } from "react-redux";
import { getYearlyPrice } from "../../utils";
import { addAddon, removeAddon } from "../../redux/slices/addonSlice";

const AddOnItem = ({ addon }) => {
    const [isChecked, setIsChecked] = useState(false);
    const planType = useSelector((state) => state.plan.planType);
    const addons = useSelector(state => state.addons);
    const dispatch = useDispatch();
    const price =
        planType === "yearly" ? getYearlyPrice(addon.pricePerMonth) : addon.pricePerMonth;

    useEffect(() => {
        if (isChecked === true) {
            dispatch(addAddon(addon.id));
        } else {
            dispatch(removeAddon(addon.id));
        }
    }, [isChecked]);

    return (
        <div
            className={
                isChecked
                    ? `${classes.addon} + ${classes.activeAddon}`
                    : `${classes.addon}`
            }
            onClick={() => {
                setIsChecked(!isChecked);
            }}
        >
            <div
                className={
                    isChecked
                        ? `${classes.checkmarkBlock} + ${classes.activeCheckmarBlock}`
                        : `${classes.checkmarkBlock}`
                }
            >
                {isChecked ? <img src={checkmark} alt="checkmark" /> : null}
            </div>
            <div className={classes.addonData}>
                <p className={classes.addonTitle}>{addon.name}</p>
                <p className={classes.addonDescription}>{addon.description}</p>
            </div>
            <div className={classes.addonPriceBlock}>
                {planType === "yearly" ? (
                    <p className={classes.addonPrice}>+${price}/yr</p>
                ) : (
                    <p className={classes.addonPrice}>+${price}/mo</p>
                )}
            </div>
        </div>
    );
};

export default AddOnItem;

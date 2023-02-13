import React from "react";
import classes from "./AddOnItem.module.css";
import checkmark from "../../assets/images/icon-checkmark.svg";
import { useSelector } from "react-redux";
import { getYearlyPrice } from "../../utils";

const AddOnItem = ({ addon, onCheckedChange, isChecked }) => {
    const planType = useSelector((state) => state.plan.planType);
    const price =
        planType === "yearly"
            ? getYearlyPrice(addon.pricePerMonth)
            : addon.pricePerMonth;

    const onClickHandler = () => {
        onCheckedChange(addon.id, !isChecked);
    };

    return (
        <div
            className={
                isChecked
                    ? `${classes.addon} + ${classes.activeAddon}`
                    : `${classes.addon}`
            }
            onClick={onClickHandler}
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

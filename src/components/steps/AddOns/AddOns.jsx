import React from "react";
import { addonsDataBase } from "../../../utils";
import AddOnItem from "../../AddOnItem/AddOnItem";
import classes from "./AddOns.module.css";

const AddOns = () => {
    return (
        <div>
            <h1 className="stepTitle">Pick add-ons</h1>
            <p className="stepDescription">
                Add-ons help enhance your gaming experience.
            </p>
            <div className={classes.addonsContainer}>
                {addonsDataBase.map((item) => (
                    <AddOnItem key={item.id} addon={item} />
                ))}
            </div>
        </div>
    );
};

export default AddOns;

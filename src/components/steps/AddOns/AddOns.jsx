import React from "react";
import { addAddon, removeAddon } from "../../../redux/slices/addonSlice";
import { addonsDataBase } from "../../../utils";
import AddOnItem from "../../AddOnItem/AddOnItem";
import classes from "./AddOns.module.css";
import { useSelector, useDispatch } from "react-redux";

const AddOns = () => {
    const addons = useSelector((state) => state.addons);
    const dispatch = useDispatch();
    const onCheckedChange = (id, isChecked) => {
        isChecked ? dispatch(addAddon(id)) : dispatch(removeAddon(id));
    };

    return (
        <div className="addonsStep">
            <h1 className="stepTitle">Pick add-ons</h1>
            <p className="stepDescription">
                Add-ons help enhance your gaming experience.
            </p>
            <div className={classes.addonsContainer}>
                {addonsDataBase.map((item) => (
                    <AddOnItem
                        key={item.id}
                        addon={item}
                        isChecked={addons.includes(item.id)}
                        onCheckedChange={onCheckedChange}
                    />
                ))}
            </div>
        </div>
    );
};

export default AddOns;

import React from "react";
import { useSelector } from "react-redux";
import UserInfo from "../steps/UserInfo/UserInfo";
import SelectPlan from "../steps/SelectPlan/SelectPlan";
import AddOns from "../steps/AddOns/AddOns";
import Summary from "../steps/Summary/Summary";
import classes from "./Display.module.css";

const Display = () => {
    const activeStep = useSelector((state) => state.steps.step);

    return (
        <div className={classes.display}>
            {activeStep === 1 && <UserInfo />}
            {activeStep === 2 && <SelectPlan />}
            {activeStep === 3 && <AddOns />}
            {activeStep === 4 && <Summary />}
        </div>
    );
};

export default Display;

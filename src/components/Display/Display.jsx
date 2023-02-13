import React, { useState } from "react";
import { useSelector } from "react-redux";
import UserInfo from "../steps/UserInfo/UserInfo";
import SelectPlan from "../steps/SelectPlan/SelectPlan";
import AddOns from "../steps/AddOns/AddOns";
import Summary from "../steps/Summary/Summary";
import classes from "./Display.module.css";
import Controls from "../Controls/Controls";
import Gratitude from "../Gratitude/Gratitude";

const Display = () => {
    const activeStep = useSelector((state) => state.steps.step);
    const [isConfirmed, setIsConfirmed] = useState(false);

    return (
        <div className={classes.display}>
            {isConfirmed === true ? <Gratitude/> : (
                <>
                    {activeStep === 1 && <UserInfo />}
                    {activeStep === 2 && <SelectPlan />}
                    {activeStep === 3 && <AddOns />}
                    {activeStep === 4 && <Summary />}
                    <Controls
                        isConfirmed={isConfirmed}
                        setIsConfirmed={setIsConfirmed}
                    />
                </>
            )}
        </div>
    );
};

export default Display;

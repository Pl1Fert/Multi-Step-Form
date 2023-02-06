import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Controls.module.css";
import { nextStep, previousStep } from "../../redux/slices/stepSlice";

const Controls = () => {
    const activeStep = useSelector((state) => state.steps);
    const dispatch = useDispatch();

    const backButtonHandler = () => {
        dispatch(previousStep(activeStep));
    };

    const nextButtonHandler = () => {
        dispatch(nextStep(activeStep));
    };

    return (
        <div className={classes.controls}>
            {activeStep.step !== 1 && (
                <button
                    type="button"
                    className={classes.btnBack}
                    onClick={backButtonHandler}
                >
                    Go Back
                </button>
            )}
            {activeStep.step === 4 ? (
                <button
                    type="confirm"
                    className={classes.btnConfirm}
                    onClick={() => {}}
                >
                    Confirm
                </button>
            ) : (
                <button
                    type="button"
                    className={classes.btnNext}
                    onClick={nextButtonHandler}
                >
                    Next Step
                </button>
            )}
        </div>
    );
};

export default Controls;
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Controls.module.css";
import { nextStep, previousStep } from "../../redux/slices/stepSlice";

const Controls = ({ isConfirmed, setIsConfirmed, handler }) => {
    const activeStep = useSelector((state) => state.steps.step);
    const dispatch = useDispatch();

    const backButtonHandler = () => {
        dispatch(previousStep(activeStep));
    };

    const nextButtonHandler = () => {
        const success = handler();

        if (success) {
            dispatch(nextStep(activeStep));
        }
    };

    return (
        <div className={classes.controls}>
            {activeStep !== 1 && (
                <button
                    type="button"
                    className={classes.btnBack}
                    onClick={backButtonHandler}
                >
                    Go Back
                </button>
            )}
            {activeStep === 4 ? (
                <button
                    type="confirm"
                    className={classes.btnConfirm}
                    onClick={() => {
                        setIsConfirmed(!isConfirmed);
                    }}
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

import React from "react";
import classes from "./SelectPlan.module.css";
import { plansDatabase } from "../../../utils";
import PlanItem from "../../PlanItem/PlanItem";
import iconArcade from "../../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../../assets/images/icon-advanced.svg";
import iconPro from "../../../assets/images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { changePlanType } from "../../../redux/slices/planSlice";
import Controls from "../../Controls/Controls";
import swal from "sweetalert";

const SelectPlan = () => {
    const images = {
        iconArcade,
        iconAdvanced,
        iconPro,
    };

    const planState = useSelector((state) => state.plan);
    const dispatch = useDispatch();

    const nexthandler = () => {
        if (planState.planId !== null) {
            return true;
        }

        swal({
            title: "Oops...",
            text: "Choose a plan!",
            icon: "error",
            button: "Close",
        });

        return false;
    };

    return (
        <div className="selectPlanStep">
            <h1 className="stepTitle">Select your plan</h1>
            <p className="stepDescription">
                You have the option of monthly or yearly billing.
            </p>
            <div className={classes.plansContainer}>
                {plansDatabase.map((item) => (
                    <PlanItem
                        key={item.id}
                        plan={item}
                        img={images[item.img]}
                    />
                ))}
            </div>
            <div className={classes.selectPlanContainer}>
                <p
                    className={
                        planState.planType === "monthly"
                            ? `${classes.planType} + ${classes.activePlanType}`
                            : `${classes.planType}`
                    }
                >
                    Monthly
                </p>
                <div className={classes.radios}>
                    <input
                        type="radio"
                        name="planType"
                        value="monthly"
                        defaultChecked={planState.planType === "monthly"}
                        onClick={(e) =>
                            dispatch(changePlanType(e.target.value))
                        }
                    />
                    <input
                        type="radio"
                        name="planType"
                        value="yearly"
                        defaultChecked={planState.planType === "yearly"}
                        onClick={(e) =>
                            dispatch(changePlanType(e.target.value))
                        }
                    />
                </div>
                <p
                    className={
                        planState.planType === "yearly"
                            ? `${classes.planType} + ${classes.activePlanType}`
                            : `${classes.planType}`
                    }
                >
                    Yearly
                </p>
            </div>
            <Controls handler={nexthandler} />
        </div>
    );
};

export default SelectPlan;

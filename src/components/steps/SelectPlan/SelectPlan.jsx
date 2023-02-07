import React from "react";
import classes from "./SelectPlan.module.css";
import { planDatabase } from "../../../utils";
import PlanItem from "../../PlanItem/PlanItem";
import iconArcade from "../../../assets/images/icon-arcade.svg";
import iconAdvanced from "../../../assets/images/icon-advanced.svg";
import iconPro from "../../../assets/images/icon-pro.svg";
import { useDispatch, useSelector } from "react-redux";
import { changePlanType } from "../../../redux/slices/planSlice";

const SelectPlan = () => {
    const images = {
        iconArcade,
        iconAdvanced,
        iconPro,
    };

    const planType = useSelector((state) => state.plan.planType);
    const dispatch = useDispatch();

    return (
        <div>
            <h1 className="stepTitle">Select your plan</h1>
            <p className="stepDescription">
                You have the option of monthly or yearly billing.
            </p>
            <div className={classes.plansContainer}>
                {planDatabase.map((item) => (
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
                        planType === "monthly"
                            ? `${classes.planType} + ${classes.activePlanType}`
                            : `${classes.planType}`
                    }
                >
                    Monthly
                </p>
                <div className={classes.radios}>
                    {" "}
                    <input
                        type="radio"
                        name="planType"
                        value="monthly"
                        defaultChecked={planType === "monthly"}
                        onClick={(e) =>
                            dispatch(changePlanType(e.target.value))
                        }
                    />
                    <input
                        type="radio"
                        name="planType"
                        value="yearly"
                        defaultChecked={planType === "yearly"}
                        onClick={(e) =>
                            dispatch(changePlanType(e.target.value))
                        }
                    />
                </div>
                <p
                    className={
                        planType === "yearly"
                            ? `${classes.planType} + ${classes.activePlanType}`
                            : `${classes.planType}`
                    }
                >
                    Yearly
                </p>
            </div>
        </div>
    );
};

export default SelectPlan;

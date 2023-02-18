import React from "react";
import { useSelector } from "react-redux";
import { addonsDataBase, getPlanById, getYearlyPrice } from "../../../utils";
import classes from "./Summary.module.css";
import Controls from "../../Controls/Controls";

const Summary = ({isConfirmed, setIsConfirmed}) => {
    const plan = useSelector((state) => state.plan);
    const addonsState = useSelector((state) => state.addons);
    const addons = addonsDataBase.filter((addon) =>
        addonsState.includes(addon.id)
    );

    const selectedPlan = getPlanById(plan.planId);
    const selectedPlanType =
        plan.planType.charAt(0).toUpperCase() + plan.planType.slice(1);
    const planPrice =
        plan.planType === "yearly"
            ? getYearlyPrice(selectedPlan.pricePerMonth)
            : selectedPlan.pricePerMonth;

    const getLabels = (plan) => {
        let periodLabel = "";
        let totalPeriodLabel = "";

        if (plan.planType === "yearly") {
            periodLabel = "yr";
            totalPeriodLabel = "per year";
        } else {
            periodLabel = "mo";
            totalPeriodLabel = "per month";
        }

        return { periodLabel, totalPeriodLabel };
    };

    const { periodLabel, totalPeriodLabel } = getLabels(plan);

    const getAddonPrice = (addon) => {
        if (plan.planType === "yearly") {
            return getYearlyPrice(addon.pricePerMonth);
        } else {
            return addon.pricePerMonth;
        }
    };

    const getTotalPrice = () => {
        let totalSum = 0;
        totalSum += planPrice;
        return addons.reduce((acc, cur) => acc + getAddonPrice(cur), totalSum);
    };

    return (
        <div className="summaryStep">
            <h1 className="stepTitle">Finishing up</h1>
            <p className="stepDescription">
                Double-check everything looks OK before confirming.
            </p>
            <div className={classes.summaryData}>
                <div className={classes.planData}>
                    <p className={classes.planName}>
                        {selectedPlan.name} ({selectedPlanType})
                    </p>
                    <p className={classes.planPrice}>
                        ${planPrice}/{periodLabel}
                    </p>
                </div>
                <div className={classes.addonsContainer}>
                    {addons.map((addon) => {
                        return (
                            <div className={classes.addon} key={addon.id}>
                                <p className={classes.addonName}>
                                    {addon.name}
                                </p>
                                <p className={classes.addonPrice}>
                                    +${getAddonPrice(addon)}/{periodLabel}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={classes.total}>
                <p className={classes.totalInfo}>Total ({totalPeriodLabel})</p>
                <p className={classes.totalPrice}>
                    ${getTotalPrice()}/{periodLabel}
                </p>
            </div>
            <Controls isConfirmed={isConfirmed} setIsConfirmed={setIsConfirmed}/>
        </div>
    );
};

export default Summary;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFreeMonthsPerYearAmount, getYearlyPrice } from "../../utils";
import { changePlanId } from "../../redux/slices/planSlice";
import classes from "./PlanItem.module.css";

const PlanItem = ({ plan, img }) => {
    const { planId, planType } = useSelector((state) => state.plan);
    const dispatch = useDispatch();

    const freeMonths = getFreeMonthsPerYearAmount() || 0;
    const price =
        planType === "yearly"
            ? getYearlyPrice(plan.pricePerMonth)
            : plan.pricePerMonth;

    return (
        <div
            className={
                planId === plan.id
                    ? `${classes.planItem} + ${classes.activeItem}`
                    : `${classes.planItem}`
            }
            onClick={() => dispatch(changePlanId(plan.id))}
        >
            <img src={img} alt={plan.name} />
            <div className={classes.planDescription}>
                <p className={classes.planTitle}>{plan.name}</p>
                {planType === "yearly" ? (
                    <p className={classes.planPrice}>${price}/yr</p>
                ) : (
                    <p className={classes.planPrice}>${price}/mo</p>
                )}
                {planType === "yearly" ? (
                    <p className={classes.freeMonths}>
                        {freeMonths} months free
                    </p>
                ) : null}
            </div>
        </div>
    );
};

export default PlanItem;

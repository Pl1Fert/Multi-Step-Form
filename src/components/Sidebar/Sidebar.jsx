import React from "react";
import { useSelector } from "react-redux";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
    const activeStep = useSelector((state) => state.steps.step);

    const steps = [
        { level: 1, label: "YOUR INFO" },
        { level: 2, label: "SELECT PLAN" },
        { level: 3, label: "ADD-ONS" },
        { level: 4, label: "SUMMARY" },
    ];

    return (
        <div className={classes.sidebar}>
            {steps.map((item) => (
                <div className={classes.sidebarItem} key={item.level}>
                    <div
                        className={
                            activeStep === item.level
                                ? `${classes.sidebarItemCircle} + ${classes.activeCircle}`
                                : `${classes.sidebarItemCircle}`
                        }
                    >
                        {item.level}
                    </div>
                    <div className={classes.sidebarItemInfo}>
                        <p className={classes.sidebarItemSuptitle}>
                            STEP {item.level}
                        </p>
                        <p className={classes.sidebarItemTitle}>
                            {item.label}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;

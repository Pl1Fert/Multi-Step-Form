import React from "react";
import classes from "./Gratitude.module.css";
import gratitudeIcon from "../../assets/images/icon-thank-you.svg";

const Gratitude = () => {
    return (
        <div className={classes.gratitude}>
            <img
                src={gratitudeIcon}
                alt="gratitudeIcon"
                className={classes.img}
            />
            <h1 className="stepTitle">Thank you!</h1>
            <p className={`stepDescription + ${classes.text}`}>
                Thanks for confirming your subscription! We hope you have fun
                using our platform. If you ever need support, please feel free
                to email us at support@loremgaming.com.
            </p>
        </div>
    );
};

export default Gratitude;

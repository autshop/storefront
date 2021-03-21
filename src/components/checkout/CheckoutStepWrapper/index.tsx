import { FC } from "react";
import { CircularProgress, TextField, Button, makeStyles, FormHelperText, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
//
import { CheckoutAddressStepTypes, CheckoutContactStepTypes } from "~utils/forms/types";
import { createFieldErrorFromHookFromError } from "~utils/forms/helpers";
import ButtonContainer from "~components/common/ButtonContainer";
import { CheckoutStepKey } from "~lib/checkout/types";
import { getCheckoutStep } from "~lib/checkout/selectors";
import { useSelector } from "react-redux";
import { StoreState } from "~lib/state";

const useStyles = makeStyles(() => ({
    input: {
        width: "100%",
        "padding-bottom": "14px"
    },
    "button-container": {
        display: "flex",
        "justify-content": "flex-end"
    },
    button: {
        background: "#FFB775"
    },
    formWrapper: {
        position: "relative"
    },
    progressWrapper: {
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    progress: {
        color: "#000000 !important",
        opacity: 1
    },
    title: {
        padding: "32px 0 24px 0"
    },
    errorMessage: {
        color: "red",
        textAlign: "right",
        paddingTop: "16px"
    }
}));

type Props = {
    title: string;
    children: any;
    checkoutStepKey: CheckoutStepKey;
};

const CheckoutStep: FC<Props> = ({ title, children, checkoutStepKey }) => {
    const classes = useStyles();

    const checkoutStep = useSelector((state: StoreState) => getCheckoutStep(state, checkoutStepKey));

    return (
        <>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.formWrapper}>
                {children}
                {checkoutStep.isLoading ? (
                    <div className={classes.progressWrapper}>
                        <CircularProgress className={classes.progress} />
                    </div>
                ) : null}
            </div>
            <Typography className={classes.errorMessage}>{checkoutStep?.error}</Typography>
        </>
    );
};
export default CheckoutStep;

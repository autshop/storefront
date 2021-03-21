import { FC, useEffect } from "react";
import ContactStep from "~components/checkout/steps/ContactStep";
import { makeStyles } from "@material-ui/core";
import CartContent from "~components/cart/CartContent";
import AddressStep from "~components/checkout/steps/AddressStep";
import ShippingStep from "~components/checkout/steps/ShippingStep";
import { useDispatch } from "react-redux";
import { showCartAction } from "~lib/ui/actions";
import CheckoutStepWrapper from "~components/checkout/CheckoutStepWrapper";
import { CheckoutStepKey } from "~lib/checkout/types";

const useStyles = makeStyles(theme => ({
    root: {
        display: "grid",
        gridTemplateColumns: "100%",
        width: "80%",
        margin: "0 auto",
        paddingTop: "80px",

        [theme.breakpoints.up("sm")]: {
            gridTemplateColumns: "1fr 154px 1fr"
        },
        [theme.breakpoints.up("lg")]: {
            gridTemplateColumns: "1fr 308px 1fr"
        }
    },
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
    progress: {
        color: "#FFB775"
    },
    title: {
        padding: "32px 0 24px 0"
    }
}));

const Checkout: FC = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(showCartAction(false));
    }, []);

    return (
        <div className={classes.root}>
            <div>
                <CheckoutStepWrapper title={"Contact"} checkoutStepKey={CheckoutStepKey.CONTACT}>
                    <ContactStep classes={classes} />
                </CheckoutStepWrapper>
                <CheckoutStepWrapper title={"Address"} checkoutStepKey={CheckoutStepKey.ADDRESS}>
                    <AddressStep classes={classes} />
                </CheckoutStepWrapper>
                <CheckoutStepWrapper title={"Shipping"} checkoutStepKey={CheckoutStepKey.METHOD}>
                    <ShippingStep classes={classes} />
                </CheckoutStepWrapper>
            </div>
            <div />
            <div>
                <CartContent />
            </div>
        </div>
    );
};

export default Checkout;

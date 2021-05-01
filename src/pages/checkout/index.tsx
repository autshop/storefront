import { FC, useEffect } from "react";
import ContactStep from "~components/checkout/steps/ContactStep";
import { makeStyles } from "@material-ui/core";
import CartContent from "~components/cart/CartContent";
import AddressStep from "~components/checkout/steps/AddressStep";
import ShippingStep from "~components/checkout/steps/ShippingStep";
import { useDispatch, useSelector } from "react-redux";
import { showCartAction } from "~lib/ui/actions";
import CheckoutStepWrapper from "~components/checkout/CheckoutStepWrapper";
import { CheckoutStepKey } from "~lib/checkout/types";
import { getOrder, getOrderItems } from "~lib/checkout/selectors";
import { keys } from "lodash";
import { useRouter } from "next/router";

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
    const order = useSelector(getOrder);
    const orderItems = useSelector(getOrderItems);

    //if ((keys(orderItems) || []).length <= 0) return null;

    const dispatch = useDispatch();

    const router = useRouter();

    useEffect(() => {
        dispatch(showCartAction(false));
    }, []);

    useEffect(() => {
        if ((keys(orderItems) || []).length === 0) router.push("/");
    }, [router.pathname, orderItems]);

    if (!order) return null;

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

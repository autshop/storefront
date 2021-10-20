import { FC } from "react";
import Link from "next/link";
import { makeStyles, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { keys } from "lodash";
//
import { getIsCartShown } from "~redux/ui/selectors";
import Button from "~components/common/Button";
import CartContent from "~components/cart/CartContent";
import { getOrderItems } from "~redux/checkout/selectors";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        background: "white",
        position: "absolute",
        right: 0,
        top: 50,
        textAlign: "right",
        [theme.breakpoints.up("sm")]: {
            width: 437
        }
    },
    button: {
        background: "#FFB775",
        color: "black",
        width: "134px"
    }
}));

const Cart: FC = () => {
    const classes = useStyles();

    const isCartShown = useSelector(getIsCartShown);
    const orderItems = useSelector(getOrderItems);

    const orderItemCount = (keys(orderItems) || []).length;
    if (orderItemCount <= 0) return null;

    if (!isCartShown) return null;

    return (
        <Paper className={classes.root}>
            <CartContent />
            <Link href="/checkout">
                <Button className={classes.button} size="small" onClick={() => null}>
                    Checkout
                </Button>
            </Link>
        </Paper>
    );
};

export default Cart;

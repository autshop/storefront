import { FC } from "react";
import Link from "next/link";
import { makeStyles, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
//
import { getIsCartShown } from "~lib/ui/selectors";
import Button from "~components/common/Button";
import CartContent from "~components/cart/CartContent";

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
    const isCartShown = useSelector(getIsCartShown);
    const classes = useStyles();

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

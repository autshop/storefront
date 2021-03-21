import { FC } from "react";
import Link from "next/link";

import { makeStyles, Paper } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getIsCartShown } from "~lib/ui/selectors";
import CartItem from "~components/cart/CartContent/components/CartItem";
import Button from "~components/common/Button";
import CartContent from "~components/cart/CartContent";

const useStyles = makeStyles({
    root: {
        width: 437,
        background: "white",
        position: "absolute",
        right: 0,
        top: 50,
        textAlign: "right"
    },
    button: {
        background: "#FFB775",
        color: "black",
        width: "134px"
    }
});

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

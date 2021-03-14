import { FC } from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getIsCartShown } from "~lib/ui/selectors";

const useStyles = makeStyles({});

const Cart: FC = () => {
    const isCartShown = useSelector(getIsCartShown);
    const classes = useStyles();

    if (!isCartShown) return null;

    return <p>cart</p>;
};

export default Cart;

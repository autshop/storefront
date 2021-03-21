import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import CartItem from "~components/cart/CartContent/components/CartItem";

const useStyles = makeStyles({
    root: {
        width: "100%"
    }
});

const CartContent: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CartItem />
            <CartItem />
        </div>
    );
};

export default CartContent;

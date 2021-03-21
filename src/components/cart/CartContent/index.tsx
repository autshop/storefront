import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { map, keys } from "lodash";
//
import { getCart } from "~lib/cart/selectors";
import CartItem from "~components/cart/CartContent/components/CartItem";

const useStyles = makeStyles({
    root: {
        width: "100%"
    }
});

const CartContent: FC = () => {
    const classes = useStyles();

    const cart = useSelector(getCart);

    return (
        <div className={classes.root}>
            {map(cart, ({ id }) => (
                <CartItem cartItemId={id} />
            ))}
        </div>
    );
};

export default CartContent;

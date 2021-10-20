import { FC } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { map } from "lodash";
//
import { getOrderItems } from "~redux/checkout/selectors";
import CartItem from "~components/cart/CartContent/components/CartItem";

const useStyles = makeStyles({
    root: {
        width: "100%"
    }
});

const CartContent: FC = () => {
    const classes = useStyles();

    const orderItem = useSelector(getOrderItems);

    return (
        <div className={classes.root}>
            {map(orderItem, ({ id }) => (
                <CartItem orderItemId={id} />
            ))}
        </div>
    );
};

export default CartContent;

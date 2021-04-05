import { FC } from "react";
import { get } from "lodash";
import { Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
//
import { StoreState } from "~lib/state";
import { getOrderItemById } from "~lib/checkout/selectors";
import { getVariantById } from "~lib/variant/selectors";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        border: "none",
        boxShadow: "none",
        borderTop: "1px solid #8C8C8C",
        padding: 24
    },
    details: {
        display: "flex",
        flexDirection: "column",
        textAlign: "left"
    },
    content: {
        flex: "1 0 auto",
        paddingTop: 0
    },
    text: {
        fontSize: 14
    },
    cover: {
        width: 96,
        height: 96
    }
}));

type Props = {
    cartItemId: number;
};

const CartItem: FC<Props> = ({ cartItemId }) => {
    const classes = useStyles();

    const cartItem = useSelector((state: StoreState) => getOrderItemById(state, cartItemId));
    const variant = useSelector((state: StoreState) => getVariantById(state, cartItem.variantId));

    const size = get(cartItem, "size.measurement", null);

    if (!cartItem || !variant) return null;

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image="https://cdn.shopify.com/s/files/1/0159/3150/6742/products/i-am-an-example-to-others-a-bad-example-mens-premium-t-shirt-t-shirt-graphic-gear-black-s-648295.jpg?v=1572880068"
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography variant="body1" className={classes.text}>
                        {variant.name}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.text}>
                        Size <b>{size}</b>
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default CartItem;

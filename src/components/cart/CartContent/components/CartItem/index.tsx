import { FC } from "react";
import { Card, CardContent, CardMedia, IconButton, makeStyles, Paper, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { getIsCartShown } from "~lib/ui/selectors";

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

const CartItem: FC = () => {
    const classes = useStyles();

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
                        Fancy Dress
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary" className={classes.text}>
                        Size <b>S</b>
                    </Typography>
                </CardContent>
            </div>
        </Card>
    );
};

export default CartItem;

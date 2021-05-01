import { FC, memo, useEffect, useState } from "react";
import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
//
import serverApi from "~api/index";
import { useRouter } from "next/router";
import { Order } from "~lib/checkout/types";
import Head from "next/head";
import { getTenantName } from "~utils/helpers";

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        margin: "64px auto 0 auto",
        textAlign: "center",

        [theme.breakpoints.up("sm")]: {
            width: "60%"
        }
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: "20px",
        textAlign: "center",
        padding: "16px 0 32px 0",

        [theme.breakpoints.up("sm")]: {
            fontSize: "24px"
        }
    },
    details: {
        fontSize: "16px",
        [theme.breakpoints.up("sm")]: {
            fontSize: "24px"
        }
    }
}));

const ThankYou: FC = () => {
    const classes = useStyles();

    const [order, setOrder] = useState<Order | null>(null);

    const router = useRouter();

    const { orderId } = router.query;
    useEffect(() => {
        const id = Number(orderId);

        if (!id) return null;

        (async () => await loadOrder(id))();
    }, [orderId]);

    const loadOrder = async (orderId: number) => {
        try {
            const {
                data: { data: _order }
            } = await serverApi.get(`/order/${orderId}`);
            setOrder(_order);
        } catch (err) {
            console.log(err);
        }
    };

    if (!order) return null;

    return (
        <>
            <Head>
                <title>Thank you!{" - " + getTenantName()}</title>
            </Head>
            <Card className={classes.root} variant="outlined">
                <CardContent>
                    <Typography className={classes.title} variant="h4" component="h4">
                        Thank you for your purchase <b>{order.customerEmail}</b>!
                    </Typography>

                    <Typography className={classes.details} variant="h4" component="h4">
                        Your order number is <b>#{order.id}</b>.
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
};

export default memo(ThankYou);

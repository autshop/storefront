import { FC, memo } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import Link from "next/link";
import { useSelector } from "react-redux";
import { keys, map } from "lodash";
//
import { getIsMobileWindow } from "~lib/ui/selectors";
import { getCollections } from "~lib/collections/selectors";
import { getOrderItems } from "~lib/checkout/selectors";

const useStyles = makeStyles({
    root: {
        paddingLeft: "24px",
        display: "flex"
    },
    collectionLink: {
        padding: "0 21px",
        "font-size": "14px",
        display: "block",
        cursor: "pointer",
        lineHeight: "24px"
    },
    homeLink: {
        cursor: "pointer"
    }
});

const DesktopHeaderContent: FC = () => {
    const classes = useStyles();

    const isMobileWindow = useSelector(getIsMobileWindow);
    const collections = useSelector(getCollections);
    const orderItems = useSelector(getOrderItems);

    const orderItemCount = (keys(orderItems) || []).length;
    if (orderItemCount <= 0) return null;

    if (isMobileWindow) return null;

    return (
        <div className={classes.root}>
            <Link href="/" passHref>
                <Typography className={classes.homeLink}>Example Store Logo</Typography>
            </Link>
            {map(collections, ({ id, name }) => (
                <Link key={id} href={`/collections/[collection-id]/`} as={`/collections/${id}`} passHref>
                    <Typography className={classes.collectionLink}>{name}</Typography>
                </Link>
            ))}
        </div>
    );
};

export default memo(DesktopHeaderContent);

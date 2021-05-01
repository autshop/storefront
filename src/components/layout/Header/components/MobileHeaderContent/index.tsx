import { FC, memo, useState } from "react";
import { makeStyles, Menu, MenuItem, Typography } from "@material-ui/core";
import Link from "next/link";
import { useSelector } from "react-redux";
import { keys, map } from "lodash";
//
import MenuIcon from "@material-ui/icons/Menu";
import { getIsMobileWindow } from "~lib/ui/selectors";
import { getCollections } from "~lib/collections/selectors";
import { getOrderItems } from "~lib/checkout/selectors";

const useStyles = makeStyles({
    root: {
        display: "flex",
        margin: 0,
        padding: 0
    },
    mobileMenuIcon: {
        padding: "0 16px"
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

const MobileHeaderContent: FC = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const isMobileWindow = useSelector(getIsMobileWindow);
    const collections = useSelector(getCollections);
    const orderItems = useSelector(getOrderItems);

    const orderItemCount = (keys(orderItems) || []).length;
    if (orderItemCount <= 0) return null;

    const handleMobileMenuClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setAnchorEl(null);
    };

    if (!isMobileWindow) return null;

    return (
        <div className={classes.root}>
            <MenuIcon onClick={handleMobileMenuClick} className={classes.mobileMenuIcon} />
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMobileMenuClose}
            >
                {map(collections, ({ id, name }) => (
                    <MenuItem key={id} onClick={handleMobileMenuClose}>
                        <Link href={`/collections/[collection-id]/`} as={`/collections/${id}`} passHref>
                            <Typography className={classes.collectionLink}>{name}</Typography>
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
            <Link href="/" passHref>
                <Typography className={classes.homeLink}>Example Store Logo</Typography>
            </Link>
        </div>
    );
};

export default memo(MobileHeaderContent);

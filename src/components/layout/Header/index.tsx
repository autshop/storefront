import { FC } from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { keys } from "lodash";
//
import { showCartAction } from "~redux/ui/actions";
import { getIsCartShown } from "~redux/ui/selectors";
import Cart from "~components/cart/Cart";
import { getOrderItems } from "~redux/checkout/selectors";
import MobileHeaderContent from "~components/layout/Header/components/MobileHeaderContent";
import DesktopHeaderContent from "~components/layout/Header/components/DesktopHeaderContent";

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        zIndex: 10
    },
    appbar: {
        height: "50px",
        background: "white",
        color: "black",
        margin: 0,
        padding: 0
    },
    rootMenu: {
        height: "50px",
        minHeight: "50px",
        display: "flex",
        "justify-content": "space-between",
        margin: 0,
        padding: 0
    },
    leftMenu: {
        display: "flex"
    },
    mobileMenuIcon: {
        paddingRight: "16px"
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
    },
    cartLink: {
        "text-align": "right",
        cursor: "pointer",
        paddingRight: "16px",
        [theme.breakpoints.up("sm")]: {
            paddingRight: "24px"
        }
    }
}));

const Header: FC = () => {
    const classes = useStyles();

    const isCartShown = useSelector(getIsCartShown);
    const orderItems = useSelector(getOrderItems);

    const orderItemCount = (keys(orderItems) || []).length;

    const dispatch = useDispatch();

    const handleCartToggle = () => dispatch(showCartAction(!isCartShown));

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.rootMenu}>
                    <div className={classes.leftMenu}>
                        <MobileHeaderContent />
                        <DesktopHeaderContent />
                    </div>
                    <div>
                        <Typography className={classes.cartLink} onClick={handleCartToggle}>
                            Cart ({orderItemCount})
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Cart />
        </div>
    );
};

export default Header;

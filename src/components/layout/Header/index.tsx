import { FC, useState } from "react";
import { AppBar, makeStyles, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";
import MenuIcon from "@material-ui/icons/Menu";

//
import { showCartAction } from "~lib/ui/actions";
import { getIsCartShown, getIsMobileWindow } from "~lib/ui/selectors";
import Cart from "~components/common/Cart";
import { getCollections } from "~lib/collections/selectors";

const useStyles = makeStyles({
    root: {
        height: "50px",
        background: "white",
        color: "black",
        padding: "0 48px"
    },
    rootMenu: {
        height: "50px",
        minHeight: "50px",
        display: "flex",
        "justify-content": "space-between"
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
    cartLink: {
        "text-align": "right",
        cursor: "pointer"
    }
});

const Header: FC = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const isMobileWindow = useSelector(getIsMobileWindow);
    const isCartShown = useSelector(getIsCartShown);
    const collections = useSelector(getCollections);

    const dispatch = useDispatch();

    const handleCartToggle = () => dispatch(showCartAction(!isCartShown));

    const handleMobileMenuClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.rootMenu}>
                    <div className={classes.leftMenu}>
                        {isMobileWindow ? (
                            <>
                                <MenuIcon onClick={handleMobileMenuClick} className={classes.mobileMenuIcon} />
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleMobileMenuClose}
                                >
                                    {map(collections, ({ id, name }) => (
                                        <MenuItem onClick={handleMobileMenuClose}>
                                            <Link
                                                href={`/collections/[collection-id]/`}
                                                as={`/collections/${id}`}
                                                passHref
                                            >
                                                <Typography className={classes.collectionLink}>{name}</Typography>
                                            </Link>
                                        </MenuItem>
                                    ))}
                                </Menu>

                                <Typography>Example Store Logo</Typography>
                            </>
                        ) : (
                            <>
                                <Typography>Example Store Logo</Typography>
                                {map(collections, ({ id, name }) => (
                                    <Link href={`/collections/[collection-id]/`} as={`/collections/${id}`} passHref>
                                        <Typography className={classes.collectionLink}>{name}</Typography>
                                    </Link>
                                ))}
                            </>
                        )}
                    </div>
                    <div>
                        <Typography className={classes.cartLink} onClick={handleCartToggle}>
                            Cart
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
            <Cart />
        </div>
    );
};

export default Header;

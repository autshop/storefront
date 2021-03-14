import { FC } from "react";
import { AppBar, makeStyles, Toolbar, Typography } from "@material-ui/core";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";
//
import { showCartAction } from "~lib/ui/actions";
import { getIsCartShown } from "~lib/ui/selectors";
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
    collectionLink: {
        "padding-left": "42px",
        "font-size": "14px",
        display: "block",
        cursor: "pointer"
    },
    cartLink: {
        "text-align": "right",
        cursor: "pointer"
    }
});

const Header: FC = () => {
    const classes = useStyles();

    const isCartShown = useSelector(getIsCartShown);
    const collections = useSelector(getCollections);

    const dispatch = useDispatch();

    const handleCartToggle = () => dispatch(showCartAction(!isCartShown));

    return (
        <div>
            <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.rootMenu}>
                    <div className={classes.leftMenu}>
                        <Typography>Example Store Logo</Typography>
                        {map(collections, ({ id, name }) => (
                            <Link href={`/collections/[collection-id]/`} as={`/collections/${id}`} passHref>
                                <Typography className={classes.collectionLink}>{name}</Typography>
                            </Link>
                        ))}
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

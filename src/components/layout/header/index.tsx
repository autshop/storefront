import { FC } from "react";
import { AppBar, Button, makeStyles, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        height: "50px",
        background: "white",
        color: "black",
        padding: "0 48px"
    },
    menu: {
        height: "50px",
        minHeight: "50px"
    },
    collectionLink: {
        "padding-left": "42px",
        "font-size": "14px",
        display: "block"
    },
    cartLink: {
        "text-align": "right"
    }
});

const Header: FC = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.root}>
            <Toolbar className={classes.menu}>
                <Typography>Example Store Logo</Typography>
                <Typography className={classes.collectionLink}>Collections #1</Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;

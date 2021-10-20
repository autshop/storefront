import { CircularProgress, makeStyles, Typography } from "@material-ui/core";
import { FC } from "react";
import { useSelector } from "react-redux";
import { getIsLoadingScreenShown, getLoadingScreenText } from "~redux/ui/selectors";

const useStyles = makeStyles(() => ({
    root: {
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 0,
        left: 0,
        background: "white",
        opacity: 0.7,
        "z-index": 1000
    }
}));

const LoadingScreen: FC = () => {
    const classes = useStyles();

    const isShown = useSelector(getIsLoadingScreenShown);
    const text = useSelector(getLoadingScreenText);

    if (!isShown) return null;
    return (
        <div className={classes.root}>
            <Typography>{text}</Typography>
            <CircularProgress />
        </div>
    );
};

export default LoadingScreen;

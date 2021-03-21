import { makeStyles } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles(() => ({
    root: {
        height: "1px",
        width: "100%",
        background: "#8C8C8C"
    }
}));

const Separator: FC = () => {
    const classes = useStyles();
    return <div className={classes.root} />;
};

export default Separator;

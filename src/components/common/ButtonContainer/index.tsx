import { makeStyles } from "@material-ui/core";
import { FC, ReactNode } from "react";

const useStyles = makeStyles(() => ({
    root: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gridGap: "12px"
    }
}));

type Props = {
    children: ReactNode;
};

const ButtonContainer: FC<Props> = ({ children }) => {
    const classes = useStyles();
    return <div className={classes.root}>{children}</div>;
};

export default ButtonContainer;

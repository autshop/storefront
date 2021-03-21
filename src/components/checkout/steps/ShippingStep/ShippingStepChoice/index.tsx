import { Checkbox, makeStyles, Paper } from "@material-ui/core";
import { FC } from "react";

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        cursor: "pointer",
        height: "40px",
        marginBottom: "22px"
    },
    checkBox: {
        padding: "0 24px"
    }
}));

type Props = {
    id: number;
    name: string;
    setChoice: (id: number) => void;
    isSelected: boolean;
};

const ShippingStepChoice: FC<Props> = ({ id, name, setChoice, isSelected }) => {
    const classes = useStyles();
    return (
        <Paper onClick={() => setChoice(id)} className={classes.root}>
            <div className={classes.checkBox}>
                <Checkbox checked={isSelected} />
            </div>
            <div>
                <span>{name}</span>
            </div>
        </Paper>
    );
};

export default ShippingStepChoice;

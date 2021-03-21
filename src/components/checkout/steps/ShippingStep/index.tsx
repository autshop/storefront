import {
    Button,
    Button as MaterialButton,
    CardActions,
    CircularProgress,
    makeStyles,
    TextField
} from "@material-ui/core";
import { FC, ReactNode, useState } from "react";
import { map } from "lodash";
import ShippingStepChoice from "~components/checkout/steps/ShippingStep/ShippingStepChoice";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutContactStepTypes } from "~utils/forms/types";
import { setCheckoutContact, setCheckoutShippingMethod } from "~lib/checkout/actions";

type Props = {
    classes: any;
};

const ShippingStep: FC<Props> = ({ classes }) => {
    const [shippingMethodId, setShippingMethodId] = useState(null);

    const dispatch = useDispatch();

    const handleSave = () => dispatch(setCheckoutShippingMethod(shippingMethodId));

    const tempconfig = [
        {
            id: 1,
            name: "Regular shipping"
        },
        {
            id: 2,
            name: "Express Shipping"
        }
    ];

    return (
        <div>
            {map(tempconfig, step => (
                <ShippingStepChoice
                    id={step.id}
                    name={step.name}
                    setChoice={setShippingMethodId}
                    isSelected={step.id === shippingMethodId}
                />
            ))}
            <div className={classes["button-container"]}>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    onClick={handleSave}
                    disabled={shippingMethodId === null}
                >
                    <b>Save</b>
                </Button>
            </div>
        </div>
    );
};

export default ShippingStep;

import {
    Button,
    Button as MaterialButton,
    CardActions,
    CircularProgress,
    makeStyles,
    TextField
} from "@material-ui/core";
import { FC, ReactNode, useEffect, useState } from "react";
import { map } from "lodash";
import ShippingStepChoice from "~components/checkout/steps/ShippingStep/ShippingStepChoice";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutContactStepTypes } from "~utils/forms/types";
import { loadShippingMethodsAction, setCheckoutContact, setCheckoutShippingMethod } from "~lib/checkout/actions";
import { getShippingMethods } from "~lib/checkout/selectors";

type Props = {
    classes: any;
};

const ShippingStep: FC<Props> = ({ classes }) => {
    const [shippingMethodId, setShippingMethodId] = useState(null);

    const shippingMethods = useSelector(getShippingMethods);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadShippingMethodsAction());
    }, []);

    const handleSave = () => dispatch(setCheckoutShippingMethod(shippingMethodId));

    return (
        <div>
            {map(shippingMethods, shippingMethod => (
                <ShippingStepChoice
                    key={shippingMethod.id}
                    id={shippingMethod.id}
                    name={shippingMethod.name}
                    setChoice={setShippingMethodId}
                    isSelected={shippingMethod.id === shippingMethodId}
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

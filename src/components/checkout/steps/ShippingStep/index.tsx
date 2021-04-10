import { Button } from "@material-ui/core";
import { FC, useEffect, useState } from "react";
import { map } from "lodash";
import ShippingStepChoice from "~components/checkout/steps/ShippingStep/ShippingStepChoice";
import { useDispatch, useSelector } from "react-redux";
import { loadShippingMethodsAction, setCheckoutShippingMethodAction } from "~lib/checkout/actions";
import { getOrderShippingMethodId, getShippingMethods } from "~lib/checkout/selectors";

type Props = {
    classes: any;
};

const ShippingStep: FC<Props> = ({ classes }) => {
    const orderShippingMethodId = useSelector(getOrderShippingMethodId);
    const [shippingMethodId, setShippingMethodId] = useState(orderShippingMethodId);

    const shippingMethods = useSelector(getShippingMethods);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadShippingMethodsAction());
    }, []);

    useEffect(() => {
        setShippingMethodId(orderShippingMethodId);
    }, [orderShippingMethodId]);

    const handleSave = () => dispatch(setCheckoutShippingMethodAction(shippingMethodId));

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

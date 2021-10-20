import { FC, memo } from "react";
import { Button } from "@material-ui/core";
//
import { useDispatch, useSelector } from "react-redux";
import { finalizeOrderAction } from "~redux/checkout/actions";
import { getCheckoutStepErrors } from "~redux/checkout/selectors";
import { StoreState } from "~redux/state";
import { CheckoutStepKey } from "~redux/checkout/types";

type Props = {
    classes: any;
};

const FinalizeStep: FC<Props> = ({ classes }) => {
    const errors = useSelector((state: StoreState) => getCheckoutStepErrors(state, CheckoutStepKey.FINALIZE));

    const dispatch = useDispatch();

    const handlePlaceOrder = () => dispatch(finalizeOrderAction());

    return (
        <div className={classes["button-container"]}>
            <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={handlePlaceOrder}
            >
                <b>Place order</b>
            </Button>
        </div>
    );
};
export default memo(FinalizeStep);

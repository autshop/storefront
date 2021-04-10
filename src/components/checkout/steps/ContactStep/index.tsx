import { FC } from "react";
import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
//
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutContact } from "~lib/checkout/actions";
import { getCheckoutStepErrors, getOrderCustomerEmail } from "~lib/checkout/selectors";
import { CheckoutContactStepFieldNames, CheckoutContactStepTypes } from "~utils/forms/types/checkout/contactStep";
import { StoreState } from "~lib/state";
import { CheckoutStepKey } from "~lib/checkout/types";

type Props = {
    classes: any;
};

const ContactStep: FC<Props> = ({ classes }) => {
    const customerEmail = useSelector(getOrderCustomerEmail);
    const errors = useSelector((state: StoreState) => getCheckoutStepErrors(state, CheckoutStepKey.CONTACT));

    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm<CheckoutContactStepTypes>({
        defaultValues: { [CheckoutContactStepFieldNames.EMAIL]: customerEmail }
    });

    const handleSave = (formData: CheckoutContactStepTypes) => dispatch(setCheckoutContact(formData));

    return (
        <>
            <form onSubmit={handleSubmit(handleSave)} noValidate>
                <TextField
                    className={classes.input}
                    label="Email"
                    id="email"
                    name={CheckoutContactStepFieldNames.EMAIL}
                    inputRef={register({ required: true })}
                    required={true}
                    error={!!errors[CheckoutContactStepFieldNames.EMAIL]}
                    helperText={errors[CheckoutContactStepFieldNames.EMAIL]}
                />
                <div className={classes["button-container"]}>
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        <b>Save</b>
                    </Button>
                </div>
            </form>
        </>
    );
};
export default ContactStep;

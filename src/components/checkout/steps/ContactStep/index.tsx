import { FC, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
//
import { CheckoutContactStepTypes } from "~utils/forms/types";
import { createFieldErrorFromHookFromError } from "~utils/forms/helpers";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutContact } from "~lib/checkout/actions";
import { getOrderCustomerEmail } from "~lib/checkout/selectors";

type Props = {
    classes: any;
};

const ContactStep: FC<Props> = ({ classes }) => {
    const customerEmail = useSelector(getOrderCustomerEmail);

    const dispatch = useDispatch();

    const handleSave = (formData: CheckoutContactStepTypes) => dispatch(setCheckoutContact(formData));

    const { register, handleSubmit, errors, setValue } = useForm<CheckoutContactStepTypes>();

    useEffect(() => {
        setValue("email", customerEmail);
    }, [customerEmail]);

    return (
        <>
            <form onSubmit={handleSubmit(handleSave)} noValidate>
                <TextField
                    className={classes.input}
                    label="Email"
                    id="email"
                    name="email"
                    inputRef={register({ required: true })}
                    required={true}
                    {...createFieldErrorFromHookFromError("email", errors, "Please fill this field!")}
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

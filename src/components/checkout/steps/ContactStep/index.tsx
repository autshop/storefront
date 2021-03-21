import { FC } from "react";
import { CircularProgress, TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
//
import { CheckoutContactStepTypes } from "~utils/forms/types";
import { createFieldErrorFromHookFromError } from "~utils/forms/helpers";
import { useDispatch } from "react-redux";
import { setCheckoutContact } from "~lib/checkout/actions";

type Props = {
    classes: any;
};

const ContactStep: FC<Props> = ({ classes }) => {
    const dispatch = useDispatch();

    const handleSave = (formData: CheckoutContactStepTypes) => dispatch(setCheckoutContact(formData));

    const { register, handleSubmit, errors } = useForm<CheckoutContactStepTypes>();

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

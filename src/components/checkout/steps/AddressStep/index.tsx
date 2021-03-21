import { FC } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
//
import { CheckoutAddressStepTypes } from "~utils/forms/types";
import { createFieldErrorFromHookFromError } from "~utils/forms/helpers";
import ButtonContainer from "~components/common/ButtonContainer";
import { useDispatch } from "react-redux";
import { setCheckoutAddress } from "~lib/checkout/actions";

type Props = {
    classes: any;
};

const AddressStep: FC<Props> = ({ classes }) => {
    const { register, handleSubmit, errors } = useForm<CheckoutAddressStepTypes>();

    const dispatch = useDispatch();

    const handleSave = (formData: CheckoutAddressStepTypes) => dispatch(setCheckoutAddress(formData));

    return (
        <>
            <form onSubmit={handleSubmit(handleSave)} noValidate>
                <ButtonContainer>
                    <TextField
                        className={classes.input}
                        label="First name"
                        id="firstname"
                        name="firstname"
                        inputRef={register({ required: true })}
                        required={true}
                        {...createFieldErrorFromHookFromError("firstname", errors, "Please fill this field!")}
                    />
                    <TextField
                        className={classes.input}
                        label="Last name"
                        id="lastname"
                        name="lastname"
                        inputRef={register({ required: true })}
                        required={true}
                        {...createFieldErrorFromHookFromError("lastname", errors, "Please fill this field!")}
                    />
                </ButtonContainer>

                <TextField
                    className={classes.input}
                    label="Country"
                    id="country"
                    name="country"
                    inputRef={register({ required: true })}
                    required={true}
                    {...createFieldErrorFromHookFromError("country", errors, "Please fill this field!")}
                />
                <TextField
                    className={classes.input}
                    label="Address Line"
                    id="addressLine"
                    name="addressLine"
                    inputRef={register({ required: true })}
                    required={true}
                    {...createFieldErrorFromHookFromError("addressLine", errors, "Please fill this field!")}
                />
                <TextField
                    className={classes.input}
                    label="Postal code"
                    id="postalCode"
                    name="postalCode"
                    type="number"
                    inputRef={register({ required: true })}
                    required={true}
                    {...createFieldErrorFromHookFromError("postalCode", errors, "Please fill this field!")}
                />
                <TextField
                    className={classes.input}
                    label="Comment"
                    id="comment"
                    name="comment"
                    inputRef={register({ required: false })}
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
export default AddressStep;

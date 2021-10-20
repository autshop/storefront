import { FC } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { get } from "lodash";
//
import ButtonContainer from "~components/common/ButtonContainer";
import { useDispatch, useSelector } from "react-redux";
import { setCheckoutAddressAction } from "~redux/checkout/actions";
import { CheckoutAddressStepFieldNames, CheckoutAddressStepTypes } from "~utils/forms/types/checkout/addressStep";
import { StoreState } from "~redux/state";
import { getCheckoutStepErrors, getOrderAddress } from "~redux/checkout/selectors";
import { CheckoutStepKey } from "~redux/checkout/types";

type Props = {
    classes: any;
};

const AddressStep: FC<Props> = ({ classes }) => {
    const errors = useSelector((state: StoreState) => getCheckoutStepErrors(state, CheckoutStepKey.ADDRESS));
    const address = useSelector(getOrderAddress);
    const dispatch = useDispatch();

    const { register, handleSubmit } = useForm<CheckoutAddressStepTypes>({
        defaultValues: {
            [CheckoutAddressStepFieldNames.FIRST_NAME]: get(address, "firstName", ""),
            [CheckoutAddressStepFieldNames.LAST_NAME]: get(address, "lastName", ""),
            [CheckoutAddressStepFieldNames.ADDRESS_LINE]: get(address, "addressLine", ""),
            [CheckoutAddressStepFieldNames.COUNTRY]: get(address, "country", ""),
            [CheckoutAddressStepFieldNames.COMMENT]: get(address, "comment", ""),
            [CheckoutAddressStepFieldNames.POSTAL_CODE]: get(address, "postalCode", ""),
            [CheckoutAddressStepFieldNames.PHONE_NUMBER]: get(address, "phoneNumber", "")
        }
    });

    const handleSave = (formData: CheckoutAddressStepTypes) => dispatch(setCheckoutAddressAction(formData));

    return (
        <>
            <form onSubmit={handleSubmit(handleSave)} noValidate>
                <ButtonContainer>
                    <TextField
                        className={classes.input}
                        label="First name"
                        id="firstname"
                        name={CheckoutAddressStepFieldNames.FIRST_NAME}
                        inputRef={register}
                        error={!!errors[CheckoutAddressStepFieldNames.FIRST_NAME]}
                        helperText={errors[CheckoutAddressStepFieldNames.FIRST_NAME]}
                    />
                    <TextField
                        className={classes.input}
                        label="Last name"
                        id="lastname"
                        name={CheckoutAddressStepFieldNames.LAST_NAME}
                        inputRef={register}
                        error={!!errors[CheckoutAddressStepFieldNames.LAST_NAME]}
                        helperText={errors[CheckoutAddressStepFieldNames.LAST_NAME]}
                    />
                </ButtonContainer>

                <TextField
                    className={classes.input}
                    label="Country"
                    id="country"
                    name={CheckoutAddressStepFieldNames.COUNTRY}
                    inputRef={register}
                    error={!!errors[CheckoutAddressStepFieldNames.COUNTRY]}
                    helperText={errors[CheckoutAddressStepFieldNames.COUNTRY]}
                />
                <TextField
                    className={classes.input}
                    label="Address Line"
                    id="addressLine"
                    name={CheckoutAddressStepFieldNames.ADDRESS_LINE}
                    inputRef={register}
                    error={!!errors[CheckoutAddressStepFieldNames.ADDRESS_LINE]}
                    helperText={errors[CheckoutAddressStepFieldNames.ADDRESS_LINE]}
                />
                <TextField
                    className={classes.input}
                    label="Postal code"
                    id="postalCode"
                    name={CheckoutAddressStepFieldNames.POSTAL_CODE}
                    type="number"
                    inputRef={register}
                    error={!!errors[CheckoutAddressStepFieldNames.POSTAL_CODE]}
                    helperText={errors[CheckoutAddressStepFieldNames.POSTAL_CODE]}
                />
                <TextField
                    className={classes.input}
                    label="Phone number"
                    id="phoneNumber"
                    name={CheckoutAddressStepFieldNames.PHONE_NUMBER}
                    type="string"
                    inputRef={register}
                    error={!!errors[CheckoutAddressStepFieldNames.PHONE_NUMBER]}
                    helperText={errors[CheckoutAddressStepFieldNames.PHONE_NUMBER]}
                />
                <TextField
                    className={classes.input}
                    label="Comment"
                    id="comment"
                    name={CheckoutAddressStepFieldNames.COMMENT}
                    inputRef={register}
                    error={!!errors[CheckoutAddressStepFieldNames.COMMENT]}
                    helperText={errors[CheckoutAddressStepFieldNames.COMMENT]}
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

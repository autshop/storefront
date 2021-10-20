import { put, retry, select } from "@redux-saga/core/effects";
//
import {
    clearCheckoutStepErrorsAction,
    setCheckoutAddressAction,
    setCheckoutAddressErrorAction,
    setCheckoutAddressSuccessAction,
    setCheckoutStepIsLoadingAction
} from "~redux/checkout/actions";
import { CheckoutStepKey, Order } from "~redux/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~redux/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";
import { createApiFieldErrorTransformer } from "~utils/forms/types";
import { CheckoutAddressStepFieldNames, fieldPairs } from "~utils/forms/types/checkout/addressStep";

function* setOrderAddressSaga({ payload: { addressData } }: ReturnType<typeof setCheckoutAddressAction>) {
    const token = yield select(getOrderId);
    yield put(setCheckoutStepIsLoadingAction(CheckoutStepKey.ADDRESS));
    yield put(clearCheckoutStepErrorsAction(CheckoutStepKey.ADDRESS));
    try {
        const {
            [CheckoutAddressStepFieldNames.FIRST_NAME]: firstName,
            [CheckoutAddressStepFieldNames.LAST_NAME]: lastName,
            [CheckoutAddressStepFieldNames.ADDRESS_LINE]: addressLine,
            [CheckoutAddressStepFieldNames.COUNTRY]: country,
            [CheckoutAddressStepFieldNames.PHONE_NUMBER]: phoneNumber,
            [CheckoutAddressStepFieldNames.COMMENT]: comment,
            [CheckoutAddressStepFieldNames.POSTAL_CODE]: postalCode
        } = addressData;

        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${token}/address`, {
            firstName,
            lastName,
            addressLine,
            country,
            phoneNumber,
            comment,
            postalCode
        });

        yield put(setCheckoutAddressSuccessAction(order));
    } catch (e) {
        console.log(e);
        const validationErrorTransformer = createApiFieldErrorTransformer(fieldPairs);
        const errors = validationErrorTransformer(e);
        yield put(setCheckoutAddressErrorAction(errors));
    }
}
export default setOrderAddressSaga;

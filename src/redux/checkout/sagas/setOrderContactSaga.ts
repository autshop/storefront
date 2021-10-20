import { put, retry, select } from "@redux-saga/core/effects";
import { get, keys } from "lodash";
import { AxiosError } from "axios";
//
import {
    clearCheckoutStepErrorsAction,
    setCheckoutContactAction,
    setCheckoutContactErrorAction,
    setCheckoutContactSuccessAction,
    setCheckoutStepIsLoadingAction
} from "~redux/checkout/actions";
import { CheckoutStepKey, Order } from "~redux/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~redux/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";
import { CheckoutContactStepFieldNames, fieldPairs } from "~utils/forms/types/checkout/contactStep";
import { createApiFieldErrorTransformer } from "~utils/forms/types";

function* setOrderContactSaga({ payload: { contactData } }: ReturnType<typeof setCheckoutContactAction>) {
    const id = yield select(getOrderId);
    yield put(setCheckoutStepIsLoadingAction(CheckoutStepKey.CONTACT));
    yield put(clearCheckoutStepErrorsAction(CheckoutStepKey.CONTACT));
    try {
        const { [CheckoutContactStepFieldNames.EMAIL]: customerEmail } = contactData;

        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${id}/contact`, {
            customerEmail
        });

        yield put(setCheckoutContactSuccessAction(order));
    } catch (e) {
        console.log(e);
        const validationErrorTransformer = createApiFieldErrorTransformer(fieldPairs);
        const errors = validationErrorTransformer(e);
        yield put(setCheckoutContactErrorAction(errors));
    }
}
export default setOrderContactSaga;

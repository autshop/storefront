import { put, retry, select } from "@redux-saga/core/effects";
import { get, keys } from "lodash";
import { AxiosError } from "axios";
//
import { setCheckoutContact, setCheckoutContactError, setCheckoutContactSuccess } from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~lib/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";
import { CheckoutContactStepFieldNames, fieldPairs } from "~utils/forms/types/checkout/contactStep";
import { createApiFieldErrorTransformer } from "~utils/forms/types";

function* setOrderContactSaga({ payload: { contactData } }: ReturnType<typeof setCheckoutContact>) {
    const id = yield select(getOrderId);
    try {
        const { [CheckoutContactStepFieldNames.EMAIL]: customerEmail } = contactData;

        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${id}/contact`, {
            customerEmail
        });

        yield put(setCheckoutContactSuccess(order));
    } catch (e) {
        console.log(e);
        const validationErrorTransformer = createApiFieldErrorTransformer(fieldPairs);
        const errors = validationErrorTransformer(e);
        yield put(setCheckoutContactError(errors));
    }
}
export default setOrderContactSaga;

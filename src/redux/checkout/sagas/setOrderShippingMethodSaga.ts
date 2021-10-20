import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import {
    clearCheckoutStepErrorsAction,
    setCheckoutShippingMethodAction,
    setCheckoutShippingMethodErrorAction,
    setCheckoutShippingMethodSuccessAction,
    setCheckoutStepIsLoadingAction
} from "~redux/checkout/actions";
import { CheckoutStepKey, Order } from "~redux/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~redux/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";

function* setShippingMethodSaga({ payload: { shippingMethodId } }: ReturnType<typeof setCheckoutShippingMethodAction>) {
    const token = yield select(getOrderId);
    yield put(setCheckoutStepIsLoadingAction(CheckoutStepKey.METHOD));
    yield put(clearCheckoutStepErrorsAction(CheckoutStepKey.METHOD));
    try {
        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${token}/shippingMethod`, {
            shippingMethodId
        });

        yield put(setCheckoutShippingMethodSuccessAction(order));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to set order shipping method!");
        yield put(setCheckoutShippingMethodErrorAction(error));
    }
}
export default setShippingMethodSaga;

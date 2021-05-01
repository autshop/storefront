import { put, retry, select } from "@redux-saga/core/effects";
//
import {
    clearCheckoutStepErrorsAction,
    finalizeOrderErrorAction,
    finalizeOrderSuccessAction,
    setCheckoutStepIsLoadingAction
} from "~lib/checkout/actions";
import { getOrderId } from "~lib/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";
import { CheckoutStepKey, Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import LocalStorageManager, { LocalStorageKeys } from "~utils/localStoreManager";

function* finalizeOrderSaga() {
    const token = yield select(getOrderId);

    yield put(setCheckoutStepIsLoadingAction(CheckoutStepKey.FINALIZE));
    yield put(clearCheckoutStepErrorsAction(CheckoutStepKey.FINALIZE));

    try {
        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${token}/finalize`);
        yield put(finalizeOrderSuccessAction(order));

        //reload order
        LocalStorageManager.set(LocalStorageKeys.ORDER_TOKEN, "");

        (window as any).location = `/thank-you?orderId=${order.id}`;
    } catch (e) {
        console.log(e);
        yield put(finalizeOrderErrorAction(e));
    }
}
export default finalizeOrderSaga;

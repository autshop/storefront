import { call, put, retry } from "@redux-saga/core/effects";
import { get, toString } from "lodash";
//
import { loadCheckoutActionErrorAction, loadCheckoutSuccessAction } from "~lib/checkout/actions";
import serverApi from "~api/index";
import LocalStorageManager, { LocalStorageKeys } from "~utils/localStoreManager";
import { CustomAxiosResponse } from "~utils/api/types";
import { Order } from "~lib/checkout/types";

function* loadExistingOrder() {
    try {
        const orderId = LocalStorageManager.get(LocalStorageKeys.ORDER_TOKEN);
        if (!orderId) {
            return { success: false, order: null };
        }

        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.get, `/order/${orderId}`);

        return { success: true, order };
    } catch (e) {
        return { success: false, order: null };
    }
}

function* loadCheckoutSaga() {
    try {
        const { success, order } = yield call(loadExistingOrder);

        if (success) {
            yield put(loadCheckoutSuccessAction(order));
        } else {
            const {
                data: { data: order }
            }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.post, `/order`);

            LocalStorageManager.set(LocalStorageKeys.ORDER_TOKEN, toString(order.id));
            yield put(loadCheckoutSuccessAction(order));
        }
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load order!");
        yield put(loadCheckoutActionErrorAction(error));
    }
}
export default loadCheckoutSaga;

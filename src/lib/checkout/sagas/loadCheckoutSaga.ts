import { call, put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
import { AxiosResponse } from "axios";
//
import { loadCheckoutActionErrorAction, loadCheckoutSuccessAction } from "~lib/checkout/actions";
import serverApi from "~api/index";
import LocalStorageManager, { LocalStorageKeys } from "~utils/localStoreManager";

function* loadExistingOrder() {
    try {
        const orderId = LocalStorageManager.get(LocalStorageKeys.ORDER_TOKEN);
        if (!orderId) {
            return { success: false, order: null };
        }
        const {
            data: { data: order }
        }: AxiosResponse<any> = yield retry(2, 1500, serverApi.get, `/order/${orderId}`);

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
            //TODO TYPE
            const {
                data: { data: order }
            }: AxiosResponse<any> = yield retry(2, 1500, serverApi.post, `/order`);

            LocalStorageManager.set(LocalStorageKeys.ORDER_TOKEN, order.id);
            yield put(loadCheckoutSuccessAction(order));
        }
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load order!");
        yield put(loadCheckoutActionErrorAction(error));
    }
}
export default loadCheckoutSaga;

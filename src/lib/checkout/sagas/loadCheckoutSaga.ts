import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
import { AxiosResponse } from "axios";
//
import { loadCheckoutAction, loadCheckoutActionErrorAction, loadCheckoutSuccessAction } from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";

function* loadCheckoutSaga({ payload: { token } }: ReturnType<typeof loadCheckoutAction>) {
    try {
        const { data: order }: AxiosResponse<Order> = yield retry(2, 1500, serverApi.get, `/order/${token}`);

        yield put(loadCheckoutSuccessAction(order));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load order!");
        yield put(loadCheckoutActionErrorAction(error));
    }
}
export default loadCheckoutSaga;

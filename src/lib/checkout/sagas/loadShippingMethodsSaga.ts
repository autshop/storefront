import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import serverApi from "~api/index";
import { CustomAxiosResponse } from "~utils/api/types";
import { ShippingMethod } from "~lib/checkout/types";
import { loadShippingMethodsErrorAction, loadShippingMethodsSuccessAction } from "~lib/checkout/actions";

function* loadShippingMethodsSaga() {
    try {
        const {
            data: { data: shippingMethods }
        }: CustomAxiosResponse<ShippingMethod[]> = yield retry(2, 1500, serverApi.get, "/shippingMethod");

        yield put(loadShippingMethodsSuccessAction(shippingMethods));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load shipping methods!");
        yield put(loadShippingMethodsErrorAction(error));
    }
}

export default loadShippingMethodsSaga;

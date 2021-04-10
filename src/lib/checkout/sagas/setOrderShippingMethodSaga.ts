import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import {
    setCheckoutShippingMethod,
    setCheckoutShippingMethodError,
    setCheckoutShippingMethodSuccess
} from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~lib/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";

function* setShippingMethodSaga({ payload: { shippingMethodId } }: ReturnType<typeof setCheckoutShippingMethod>) {
    const token = yield select(getOrderId);
    try {
        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${token}/shippingMethod`, {
            shippingMethodId
        });

        yield put(setCheckoutShippingMethodSuccess(order));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to set order shipping method!");
        yield put(setCheckoutShippingMethodError(error));
    }
}
export default setShippingMethodSaga;

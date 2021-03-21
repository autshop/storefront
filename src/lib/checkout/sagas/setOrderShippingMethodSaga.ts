import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
import { AxiosResponse } from "axios";
//
import {
    setCheckoutShippingMethod,
    setCheckoutShippingMethodError,
    setCheckoutShippingMethodSuccess
} from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderToken } from "~lib/checkout/selectors";

function* setShippingMethodSaga({ payload: { shippingMethodId } }: ReturnType<typeof setCheckoutShippingMethod>) {
    const token = yield select(getOrderToken);
    try {
        const { data: order }: AxiosResponse<Order> = yield retry(
            2,
            1500,
            serverApi.put,
            `/order/${token}/shipping-method`,
            {
                shippingMethodId
            }
        );

        yield put(setCheckoutShippingMethodSuccess(order));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to set order shipping method!");
        yield put(setCheckoutShippingMethodError(error));
    }
}
export default setShippingMethodSaga;

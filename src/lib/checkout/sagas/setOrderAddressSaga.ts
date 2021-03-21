import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
import { AxiosResponse } from "axios";
//
import {
    setCheckoutAddress,
    setCheckoutAddressError,
    setCheckoutAddressSuccess,
    setCheckoutContact,
    setCheckoutContactError,
    setCheckoutContactSuccess
} from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderToken } from "~lib/checkout/selectors";

function* setOrderAddressSaga({ payload: { addressData } }: ReturnType<typeof setCheckoutAddress>) {
    const token = yield select(getOrderToken);
    try {
        const { data: order }: AxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${token}/address`, {
            ...addressData
        });

        yield put(setCheckoutAddressSuccess(order));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to set order address!");
        yield put(setCheckoutAddressError(error));
    }
}
export default setOrderAddressSaga;

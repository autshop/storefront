import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { setCheckoutAddress, setCheckoutAddressError, setCheckoutAddressSuccess } from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~lib/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";

function* setOrderAddressSaga({ payload: { addressData } }: ReturnType<typeof setCheckoutAddress>) {
    const token = yield select(getOrderId);
    try {
        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${token}/address`, {
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

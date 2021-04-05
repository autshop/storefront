import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { setCheckoutContact, setCheckoutContactError, setCheckoutContactSuccess } from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~lib/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";

function* setOrderContactSaga({ payload: { contactData } }: ReturnType<typeof setCheckoutContact>) {
    const id = yield select(getOrderId);
    try {
        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${id}/contact`, {
            customerEmail: contactData.email
        });

        yield put(setCheckoutContactSuccess(order));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.error", []);
        yield put(setCheckoutContactError(error));
    }
}
export default setOrderContactSaga;

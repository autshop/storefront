import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
import { AxiosResponse } from "axios";
//
import { addSizeAction, addSizeActionErrorAction, addSizeSuccessAction } from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~lib/checkout/selectors";

function* addSizeSaga({ payload: { sizeId } }: ReturnType<typeof addSizeAction>) {
    try {
        const orderId = yield select(getOrderId);
        const {
            data: { data: order }
        }: AxiosResponse<any> = yield retry(2, 1500, serverApi.put, `/order/${orderId}/sizes`, {
            sizeIds: [sizeId]
        });

        yield put(addSizeSuccessAction(order));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to set order address!");
        yield put(addSizeActionErrorAction(error));
    }
}
export default addSizeSaga;

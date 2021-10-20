import { put, retry, select } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { addSizeAction, addSizeActionErrorAction, addSizeSuccessAction } from "~redux/checkout/actions";
import { Order } from "~redux/checkout/types";
import serverApi from "~api/index";
import { getOrderId } from "~redux/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";
import { showCartAction } from "~redux/ui/actions";
import { loadVariantsAction } from "~redux/variant/actions";

function* addSizeSaga({ payload: { sizeId } }: ReturnType<typeof addSizeAction>) {
    try {
        const orderId = yield select(getOrderId);

        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${orderId}/sizes`, {
            sizes: [{ quantity: 1, sizeId }]
        });

        yield put(addSizeSuccessAction(order));
        yield put(showCartAction());
        yield put(loadVariantsAction());
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to set order address!");
        yield put(addSizeActionErrorAction(error));
    }
}
export default addSizeSaga;

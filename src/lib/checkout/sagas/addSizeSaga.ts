import { put, retry, select } from "@redux-saga/core/effects";
import { get, find } from "lodash";
//
import { addSizeAction, addSizeActionErrorAction, addSizeSuccessAction } from "~lib/checkout/actions";
import { Order } from "~lib/checkout/types";
import serverApi from "~api/index";
import { getOrderId, getOrderItems } from "~lib/checkout/selectors";
import { CustomAxiosResponse } from "~utils/api/types";
import { showCartAction } from "~lib/ui/actions";

function* addSizeSaga({ payload: { sizeId } }: ReturnType<typeof addSizeAction>) {
    try {
        const orderId = yield select(getOrderId);
        const orderItems = yield select(getOrderItems);

        const orderItem = find(orderItems, ({ size: { id } }) => id === sizeId);

        const sizeQuantity = !!orderItem ? orderItem.quantity + 1 : 1;

        const {
            data: { data: order }
        }: CustomAxiosResponse<Order> = yield retry(2, 1500, serverApi.put, `/order/${orderId}/sizes`, {
            sizes: [{ quantity: sizeQuantity, sizeId }]
        });

        yield put(addSizeSuccessAction(order));
        yield put(showCartAction());
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to set order address!");
        yield put(addSizeActionErrorAction(error));
    }
}
export default addSizeSaga;

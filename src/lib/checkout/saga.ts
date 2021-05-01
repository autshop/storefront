import { takeLeading, takeLatest } from "redux-saga/effects";
//
import { CheckoutActionConstants } from "~lib/checkout/actions";
import loadCheckoutSaga from "~lib/checkout/sagas/loadCheckoutSaga";
import setOrderContactSaga from "~lib/checkout/sagas/setOrderContactSaga";
import setOrderAddressSaga from "~lib/checkout/sagas/setOrderAddressSaga";
import setOrderShippingMethodSaga from "~lib/checkout/sagas/setOrderShippingMethodSaga";
import addSizeSaga from "~lib/checkout/sagas/addSizeSaga";
import loadShippingMethodsSaga from "~lib/checkout/sagas/loadShippingMethodsSaga";
import finalizeOrderSaga from "~lib/checkout/sagas/finalizeOrderSaga";

function* checkoutSaga() {
    yield takeLeading(CheckoutActionConstants.LOAD_CHECKOUT, loadCheckoutSaga);
    yield takeLeading(CheckoutActionConstants.SET_CHECKOUT_CONTACT, setOrderContactSaga);
    yield takeLeading(CheckoutActionConstants.SET_CHECKOUT_ADDRESS, setOrderAddressSaga);
    yield takeLeading(CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD, setOrderShippingMethodSaga);
    yield takeLeading(CheckoutActionConstants.ADD_SIZE, addSizeSaga);
    yield takeLatest(CheckoutActionConstants.LOAD_SHIPPING_METHODS, loadShippingMethodsSaga);
    yield takeLatest(CheckoutActionConstants.FINALIZE_ORDER, finalizeOrderSaga);
}

export default checkoutSaga;

import { takeLeading, takeLatest } from "redux-saga/effects";
//
import { CheckoutActionConstants } from "~redux/checkout/actions";
import loadCheckoutSaga from "~redux/checkout/sagas/loadCheckoutSaga";
import setOrderContactSaga from "~redux/checkout/sagas/setOrderContactSaga";
import setOrderAddressSaga from "~redux/checkout/sagas/setOrderAddressSaga";
import setOrderShippingMethodSaga from "~redux/checkout/sagas/setOrderShippingMethodSaga";
import addSizeSaga from "~redux/checkout/sagas/addSizeSaga";
import loadShippingMethodsSaga from "~redux/checkout/sagas/loadShippingMethodsSaga";
import finalizeOrderSaga from "~redux/checkout/sagas/finalizeOrderSaga";

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

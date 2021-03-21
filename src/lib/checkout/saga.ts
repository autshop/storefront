import { takeLeading } from "redux-saga/effects";
//
import { CheckoutActionConstants } from "~lib/checkout/actions";
import loadCheckoutSaga from "~lib/checkout/sagas/loadCheckoutSaga";
import setOrderContactSaga from "~lib/checkout/sagas/setOrderContactSaga";
import setOrderAddressSaga from "~lib/checkout/sagas/setOrderAddressSaga";
import setOrderShippingMethodSaga from "~lib/checkout/sagas/setOrderShippingMethodSaga";

function* checkoutSaga() {
    yield takeLeading(CheckoutActionConstants.LOAD_CHECKOUT, loadCheckoutSaga);
    yield takeLeading(CheckoutActionConstants.SET_CHECKOUT_CONTACT, setOrderContactSaga);
    yield takeLeading(CheckoutActionConstants.SET_CHECKOUT_ADDRESS, setOrderAddressSaga);
    yield takeLeading(CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD, setOrderShippingMethodSaga);
}

export default checkoutSaga;

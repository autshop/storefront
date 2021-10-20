import { all } from "redux-saga/effects";
import variantSaga from "~redux/variant/saga";
import collectionSaga from "~redux/collections/saga";
import uiSaga from "~redux/ui/saga";
import checkoutSaga from "~redux/checkout/saga";
import appSaga from "~redux/app/saga";
import storefrontPropertySaga from "~redux/storefrontProperty/saga";

function* rootSaga() {
    yield all([variantSaga(), collectionSaga(), uiSaga(), checkoutSaga(), appSaga(), storefrontPropertySaga()]);
}

export default rootSaga;

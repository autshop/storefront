import { all } from "redux-saga/effects";
import variantSaga from "~lib/variant/saga";
import cartSaga from "~lib/cart/saga";
import collectionSaga from "~lib/collections/saga";
import uiSaga from "~lib/ui/saga";

function* rootSaga() {
    yield all([variantSaga(), cartSaga(), collectionSaga(), uiSaga()]);
}

export default rootSaga;

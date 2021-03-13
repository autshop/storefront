import { all } from "redux-saga/effects";
import variantSaga from "~lib/variant/saga";
import cartSaga from "~lib/cart/saga";
import collectionSaga from "~lib/collections/saga";

function* rootSaga() {
    yield all([variantSaga(), cartSaga(), collectionSaga()]);
}

export default rootSaga;

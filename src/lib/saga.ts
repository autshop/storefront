import { all } from "redux-saga/effects";
import variantSaga from "~lib/variant/saga";
import cartSaga from "~lib/cart/saga";

function* rootSaga() {
    yield all([variantSaga(), cartSaga()]);
}

export default rootSaga;

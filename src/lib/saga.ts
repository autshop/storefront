import {all} from "redux-saga/effects";
import variantSaga from "~lib/variant/saga";

function* rootSaga() {
    yield all([variantSaga()]);
}

export default rootSaga;
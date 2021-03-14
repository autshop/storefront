import { takeLeading } from "redux-saga/effects";
import { CartActionConstants } from "~lib/cart/actions";
import addSizeSaga from "~lib/cart/sagas/addSizeSaga";

function* cartSaga() {
    yield takeLeading(CartActionConstants.ADD_SIZE, addSizeSaga);
}

export default cartSaga;

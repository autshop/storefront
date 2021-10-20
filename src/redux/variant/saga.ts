import { takeLeading } from "redux-saga/effects";
import { VariantActionConstants } from "~redux/variant/actions";
import loadVariantsSaga from "~redux/variant/sagas/loadVariantsSaga";

function* variantSaga() {
    yield takeLeading(VariantActionConstants.LOAD_VARIANTS, loadVariantsSaga);
}

export default variantSaga;

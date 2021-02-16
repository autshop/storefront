import {takeLeading} from "redux-saga/effects";
import {VariantActionConstants} from "~lib/variant/actions";
import loadVariantsSaga from "~lib/variant/sagas/loadVariantsSaga";

function* variantSaga() {
    yield takeLeading(VariantActionConstants.LOAD_VARIANTS, loadVariantsSaga);
}

export default variantSaga;
import { takeLeading } from "redux-saga/effects";
import { CollectionActionConstants } from "~lib/collections/actions";
import loadVariantsSaga from "~lib/variant/sagas/loadVariantsSaga";
import loadCollectionSaga from "~lib/collections/sagas/loadCollectionSaga";

function* collectionSaga() {
    yield takeLeading(CollectionActionConstants.LOAD_COLLECTIONS, loadCollectionSaga);
}

export default collectionSaga;

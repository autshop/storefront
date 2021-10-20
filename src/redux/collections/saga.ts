import { takeLeading } from "redux-saga/effects";
import { CollectionActionConstants } from "~redux/collections/actions";
import loadVariantsSaga from "~redux/variant/sagas/loadVariantsSaga";
import loadCollectionSaga from "~redux/collections/sagas/loadCollectionSaga";

function* collectionSaga() {
    yield takeLeading(CollectionActionConstants.LOAD_COLLECTIONS, loadCollectionSaga);
}

export default collectionSaga;

import { put } from "@redux-saga/core/effects";
//
import { loadCollectionsAction } from "~lib/collections/actions";
import { loadVariantsAction } from "~lib/variant/actions";
import { setIsAppInitializedAction } from "~lib/app/actions";

function* initializeAppSaga() {
    try {
        yield put(loadCollectionsAction());
        yield put(loadVariantsAction());

        yield put(setIsAppInitializedAction());
    } catch (e) {
        console.log(e);
    }
}
export default initializeAppSaga;

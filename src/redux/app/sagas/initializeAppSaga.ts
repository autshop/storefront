import { put } from "@redux-saga/core/effects";
//
import { loadCollectionsAction } from "~redux/collections/actions";
import { loadVariantsAction } from "~redux/variant/actions";
import { setIsAppInitializedAction } from "~redux/app/actions";
import { loadCheckoutAction } from "~redux/checkout/actions";
import { loadStorefrontPropertiesAction } from "~redux/storefrontProperty/actions";

function* initializeAppSaga() {
    try {
        yield put(loadCollectionsAction());
        yield put(loadVariantsAction());
        yield put(loadCheckoutAction());
        yield put(loadStorefrontPropertiesAction());

        yield put(setIsAppInitializedAction());
    } catch (e) {
        console.log(e);
    }
}
export default initializeAppSaga;

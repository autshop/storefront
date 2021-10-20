import { all, takeLeading } from "redux-saga/effects";
//
import loadStorefrontPropertySaga from "~redux/storefrontProperty/sagas/loadStorefrontPropertySaga";
import { StorefrontPropertyActionConstants } from "~redux/storefrontProperty/actions";
//

function* storefrontPropertySaga() {
    yield all([takeLeading(StorefrontPropertyActionConstants.LOAD_STOREFRONT_PROPERTIES, loadStorefrontPropertySaga)]);
}

export default storefrontPropertySaga;

import { takeLeading } from "redux-saga/effects";
//
import { AppActionConstants } from "~lib/app/actions";
import initializeAppSaga from "~lib/app/sagas/initializeAppSaga";

function* appSaga() {
    yield takeLeading(AppActionConstants.INITIALIZE_APP, initializeAppSaga);
}

export default appSaga;

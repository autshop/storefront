import { fork } from "redux-saga/effects";
import { windowWidthChannelSaga } from "~lib/ui/sagas/windowWidthChannelSaga";

function* uiSaga() {
    yield fork(windowWidthChannelSaga);
}

export default uiSaga;

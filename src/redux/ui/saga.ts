import { fork } from "redux-saga/effects";
import { windowWidthChannelSaga } from "~redux/ui/sagas/windowWidthChannelSaga";

function* uiSaga() {
    yield fork(windowWidthChannelSaga);
}

export default uiSaga;

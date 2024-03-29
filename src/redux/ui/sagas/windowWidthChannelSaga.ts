import { call, put, select, take } from "@redux-saga/core/effects";
import { eventChannel } from "@redux-saga/core";
import { get } from "lodash";
import { setIsMobileWindow } from "~redux/ui/actions";
import { getIsMobileWindow } from "~redux/ui/selectors";

const getWindowWidth = () => get(window, "innerWidth", 0);

const windowResizeChannel = () => {
    return eventChannel(emitter => {
        window.addEventListener("resize", () => emitter(getWindowWidth()));

        return () => window.removeEventListener("resize", getWindowWidth);
    });
};

export function* windowWidthChannelSaga() {
    //pre-render
    if (typeof window === "undefined") return;

    const channel = yield call(windowResizeChannel);
    while (true) {
        const width = yield take(channel);
        const prevIsMobileWindow = yield select(getIsMobileWindow);
        const isMobile = width <= 900;

        if (prevIsMobileWindow !== isMobile) {
            yield put(setIsMobileWindow(isMobile));
        }
    }
}

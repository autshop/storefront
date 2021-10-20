import { call, put } from "redux-saga/effects";
//
import { StorefrontProperty } from "~redux/storefrontProperty/types";
import {
    loadStorefrontPropertiesErrorAction,
    loadStorefrontPropertiesSuccessAction
} from "~redux/storefrontProperty/actions";
import { CustomAxiosResponse } from "~utils/api/types";
import serverApi from "~api/index";

function* loadStorefrontPropertySaga() {
    try {
        const {
            data: { data: storefrontProperties }
        }: CustomAxiosResponse<StorefrontProperty[]> = yield call(serverApi.get, "/storefrontProperty");

        yield put(loadStorefrontPropertiesSuccessAction(storefrontProperties));
    } catch (e) {
        yield put(loadStorefrontPropertiesErrorAction("error"));
    }
}
export default loadStorefrontPropertySaga;

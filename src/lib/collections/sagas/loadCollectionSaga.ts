import { put, retry } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";
import { get } from "lodash";
//
import {
    loadCollectionsAction,
    loadCollectionsErrorAction,
    loadCollectionsSuccessAction
} from "~lib/collections/actions";
import serverApi from "~api/index";

function* loadCollectionsSaga() {
    yield put(loadCollectionsAction());
    try {
        //TODO TYPE
        const {
            data: { data: collections }
        }: AxiosResponse<any> = yield retry(2, 1500, serverApi.get, "/collection");

        yield put(loadCollectionsSuccessAction(collections));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load collections!");
        yield put(loadCollectionsErrorAction(error));
    }
}
export default loadCollectionsSaga;

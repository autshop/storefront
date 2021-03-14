import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import {
    loadCollectionsAction,
    loadCollectionsErrorAction,
    loadCollectionsSuccessAction
} from "~lib/collections/actions";
import { fetchCollections } from "~mock/index";

function* loadCollectionsSaga() {
    yield put(loadCollectionsAction());
    try {
        //const { data: collections }: AxiosResponse<Collections[]> = yield retry(2, 1500, serverApi.get, "/collections");
        const collections = yield retry(2, 1500, fetchCollections);

        yield put(loadCollectionsSuccessAction(collections));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load collections!");
        yield put(loadCollectionsErrorAction(error));
    }
}
export default loadCollectionsSaga;

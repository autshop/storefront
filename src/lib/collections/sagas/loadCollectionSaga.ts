import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { loadCollectionsErrorAction, loadCollectionsSuccessAction } from "~lib/collections/actions";
import serverApi from "~api/index";
import { CustomAxiosResponse } from "~utils/api/types";
import { Collection } from "~lib/collections/types";

function* loadCollectionsSaga() {
    try {
        const {
            data: { data: collections }
        }: CustomAxiosResponse<Collection[]> = yield retry(2, 1500, serverApi.get, "/collection");

        yield put(loadCollectionsSuccessAction(collections));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load collections!");
        yield put(loadCollectionsErrorAction(error));
    }
}
export default loadCollectionsSaga;

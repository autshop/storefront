import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
import { AxiosResponse } from "axios";
//
import { loadVariantsAction, loadVariantsSuccessAction, loadVariantsErrorAction } from "~lib/variant/actions";
import serverApi from "~api/index";

function* loadVariantsSaga() {
    yield put(loadVariantsAction());
    try {
        const {
            data: { data: variants }
        }: AxiosResponse<any> = yield retry(2, 1500, serverApi.get, "/variant");

        yield put(loadVariantsSuccessAction(variants));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load collections!");
        yield put(loadVariantsErrorAction(error));
    }
}
export default loadVariantsSaga;

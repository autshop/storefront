import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { loadVariantsSuccessAction, loadVariantsErrorAction } from "~lib/variant/actions";
import serverApi from "~api/index";
import { CustomAxiosResponse } from "~utils/api/types";
import { Variant } from "~lib/variant/types";

function* loadVariantsSaga() {
    try {
        const {
            data: { data: variants }
        }: CustomAxiosResponse<Variant[]> = yield retry(2, 1500, serverApi.get, "/variant");

        yield put(loadVariantsSuccessAction(variants));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load collections!");
        yield put(loadVariantsErrorAction(error));
    }
}
export default loadVariantsSaga;

import { put, retry } from "@redux-saga/core/effects";
import { get } from "lodash";
//
import { loadVariantsAction, loadVariantsSuccessAction, loadVariantsErrorAction } from "~lib/variant/actions";
import { fetchVariants } from "~mock/index";

function* loadVariantsSaga() {
    yield put(loadVariantsAction());
    try {
        //const { data: variants }: AxiosResponse<Variant[]> = yield retry(2, 1500, serverApi.get, "/variants");
        const variants = yield retry(2, 1500, fetchVariants);

        yield put(loadVariantsSuccessAction(variants));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load collections!");
        yield put(loadVariantsErrorAction(error));
    }
}
export default loadVariantsSaga;

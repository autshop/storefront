import { put, retry } from "@redux-saga/core/effects";
import { get, filter } from "lodash";
//
import { loadVariantsSuccessAction, loadVariantsErrorAction } from "~redux/variant/actions";
import serverApi from "~api/index";
import { CustomAxiosResponse } from "~utils/api/types";
import { Variant } from "~redux/variant/types";

function* loadVariantsSaga() {
    try {
        const {
            data: { data: variants }
        }: CustomAxiosResponse<Variant[]> = yield retry(2, 1500, serverApi.get, "/variant");

        const enabledVariants = filter(variants, ({ enabled }) => !!enabled);

        yield put(loadVariantsSuccessAction(enabledVariants));
    } catch (e) {
        console.log(e);
        const error = get(e, "data.message", "Failed to load collections!");
        yield put(loadVariantsErrorAction(error));
    }
}
export default loadVariantsSaga;

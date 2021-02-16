import { Reducer } from "redux";
import { produce } from "immer";

import {Variant} from "~lib/variant/types";
import {VariantActionConstants} from "~lib/variant/actions";

export type VariantsState = {
    variants: Variant[];
    isLoading: boolean;
}

export const initialState: VariantsState = {
    variants: [],
    isLoading: false
};

const reducer: Reducer<VariantsState> = (state = initialState, action): VariantsState => {
    switch (action.type) {
        case VariantActionConstants.LOAD_VARIANTS: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;
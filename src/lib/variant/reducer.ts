import { Reducer } from "redux";
import { produce } from "immer";

import { Variant } from "~lib/variant/types";
import { VariantActionConstants } from "~lib/variant/actions";
import { variableDeclaration } from "@babel/types";

export type VariantsState = {
    variants: Variant[];
    isLoading: boolean;
    error: string;
};

export const initialState: VariantsState = {
    variants: [],
    isLoading: false,
    error: ""
};

const reducer: Reducer<VariantsState> = (state = initialState, action): VariantsState => {
    switch (action.type) {
        case VariantActionConstants.LOAD_VARIANTS: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case VariantActionConstants.LOAD_VARIANTS_SUCCESS: {
            return produce(state, draft => {
                const { variants } = action.payload;
                draft.isLoading = false;
                draft.variants = variants;
            });
        }
        case VariantActionConstants.LOAD_VARIANTS_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.isLoading = false;
                draft.error = error;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

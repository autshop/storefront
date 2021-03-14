import { Reducer } from "redux";
import { produce } from "immer";

import { CartActionConstants } from "~lib/cart/actions";
import { VariantSize } from "~lib/variant/types";

export type CartState = {
    variantSizes: VariantSize[];
    isLoading: boolean;
    error: string;
};

export const initialState: CartState = {
    variantSizes: [],
    isLoading: false,
    error: ""
};

const reducer: Reducer<CartState> = (state = initialState, action): CartState => {
    switch (action.type) {
        case CartActionConstants.ADD_SIZE: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case CartActionConstants.ADD_SIZE_SUCCESS: {
            return produce(state, draft => {
                const { variantSizes } = action.payload;
                draft.isLoading = false;
                draft.variantSizes = variantSizes;
            });
        }
        case CartActionConstants.ADD_SIZE_ERROR: {
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

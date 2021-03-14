import { Reducer } from "redux";
import { produce } from "immer";

import { uiActionConstants } from "~lib/ui/actions";

export type UiState = {
    isCartShown: boolean;
};

export const initialState: UiState = {
    isCartShown: false
};

const reducer: Reducer<UiState> = (state = initialState, action): UiState => {
    switch (action.type) {
        case uiActionConstants.SHOW_CART: {
            return produce(state, draft => {
                const { isCartShown } = action.payload;
                draft.isCartShown = isCartShown;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

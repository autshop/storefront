import { Reducer } from "redux";
import { produce } from "immer";

import { uiActionConstants } from "~lib/ui/actions";

export type UiState = {
    isCartShown: boolean;
    isMobileWindow: boolean;
};

export const initialState: UiState = {
    isCartShown: true,
    isMobileWindow: false
};

const reducer: Reducer<UiState> = (state = initialState, action): UiState => {
    switch (action.type) {
        case uiActionConstants.SHOW_CART: {
            return produce(state, draft => {
                const { isCartShown } = action.payload;
                draft.isCartShown = isCartShown;
            });
        }
        case uiActionConstants.SET_IS_MOBILE_WINDOW: {
            return produce(state, draft => {
                const { isMobileWindow } = action.payload;
                draft.isMobileWindow = isMobileWindow;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

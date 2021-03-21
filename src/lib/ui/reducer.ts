import { Reducer } from "redux";
import { produce } from "immer";

import { uiActionConstants } from "~lib/ui/actions";

export type UiState = {
    isCartShown: boolean;
    isMobileWindow: boolean;
    isLoadingScreenShown: boolean;
    loadingScreenText: string;
};

export const initialState: UiState = {
    isCartShown: false,
    isMobileWindow: false,
    isLoadingScreenShown: false,
    loadingScreenText: ""
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
        case uiActionConstants.SET_IS_LOADING_SCREEN_SHOWN: {
            return produce(state, draft => {
                const { isShown, text } = action.payload;
                if (isShown) {
                    draft.isLoadingScreenShown = true;
                    draft.loadingScreenText = text;
                } else {
                    draft.isLoadingScreenShown = false;
                    draft.loadingScreenText = "";
                }
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

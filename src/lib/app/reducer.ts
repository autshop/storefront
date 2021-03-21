import { Reducer } from "redux";
import { produce } from "immer";

import { AppActionConstants } from "~lib/app/actions";

export type AppState = {
    isAppInitialized: boolean;
};

export const initialState: AppState = {
    isAppInitialized: false
};

const reducer: Reducer<AppState> = (state = initialState, action): AppState => {
    switch (action.type) {
        case AppActionConstants.SET_IS_APP_INITIALIZED: {
            return produce(state, draft => {
                const { isAppInitialized } = action.payload;
                draft.isAppInitialized = isAppInitialized;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

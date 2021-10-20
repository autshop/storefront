import { Reducer } from "redux";
import { produce } from "immer";
//
import { StorefrontProperty } from "~redux/storefrontProperty/types";
import { StorefrontPropertyActionConstants } from "~redux/storefrontProperty/actions";

export type StorefrontPropertyState = {
    storefrontProperties: StorefrontProperty[];
    isLoading: boolean;
};

export const initialState: StorefrontPropertyState = {
    storefrontProperties: [],
    isLoading: false
};

const reducer: Reducer<StorefrontPropertyState> = (state = initialState, action): StorefrontPropertyState => {
    switch (action.type) {
        case StorefrontPropertyActionConstants.LOAD_STOREFRONT_PROPERTIES: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }

        case StorefrontPropertyActionConstants.LOAD_STOREFRONT_PROPERTIES_SUCCESS: {
            return produce(state, draft => {
                draft.isLoading = false;
                draft.storefrontProperties = action.payload.storefrontProperties;
            });
        }

        case StorefrontPropertyActionConstants.LOAD_STOREFRONT_PROPERTIES_ERROR: {
            return produce(state, draft => {
                draft.isLoading = false;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

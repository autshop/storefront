import { Reducer } from "redux";
import { produce } from "immer";

import { CollectionActionConstants } from "~redux/collections/actions";
import { Collection } from "~redux/collections/types";

export type CollectionsState = {
    collections: Collection[];
    isLoading: boolean;
    error: string;
};

export const initialState: CollectionsState = {
    collections: [],
    isLoading: false,
    error: ""
};

const reducer: Reducer<CollectionsState> = (state = initialState, action): CollectionsState => {
    switch (action.type) {
        case CollectionActionConstants.LOAD_COLLECTIONS: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case CollectionActionConstants.LOAD_COLLECTIONS_SUCCESS: {
            return produce(state, draft => {
                const { collections } = action.payload;
                draft.isLoading = false;
                draft.collections = collections;
            });
        }
        case CollectionActionConstants.LOAD_COLLECTIONS_ERROR: {
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

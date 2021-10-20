import { find, get } from "lodash";
//
import { StoreState } from "~redux/state";

const getState = (state: StoreState) => state.collections;

export const getCollections = (state: StoreState) => getState(state).collections;

export const getCollectionById = (state: StoreState, collectionId: number) =>
    find(getCollections(state), ({ id }) => id === collectionId);

export const getVariantsByCollectionId = (state: StoreState, collectionId: number) =>
    get(getCollectionById(state, collectionId), "variantIds", []);

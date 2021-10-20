import { Variant } from "~redux/variant/types";
import { Collection } from "~redux/collections/types";

export enum CollectionActionConstants {
    LOAD_COLLECTIONS = "COLLECTIONS/LOAD_COLLECTIONS",
    LOAD_COLLECTIONS_SUCCESS = "COLLECTIONS/LOAD_COLLECTIONS_SUCCESS",
    LOAD_COLLECTIONS_ERROR = "COLLECTIONS/LOAD_COLLECTIONS_ERROR"
}

export const loadCollectionsAction = () => ({
    type: CollectionActionConstants.LOAD_COLLECTIONS
});

export const loadCollectionsSuccessAction = (collections: Collection[]) => ({
    type: CollectionActionConstants.LOAD_COLLECTIONS_SUCCESS,
    payload: {
        collections
    }
});

export const loadCollectionsErrorAction = (error: string) => ({
    type: CollectionActionConstants.LOAD_COLLECTIONS_ERROR,
    payload: {
        error
    }
});

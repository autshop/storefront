import { combineReducers } from "redux";
import variantReducer from "~lib/variant/reducer";
import cartReducer from "~lib/cart/reducer";
import collectionReducer from "~lib/collections/reducer";
import { StoreState } from "~lib/state";

const combinedReducers = combineReducers<StoreState>({
    variant: variantReducer,
    cart: cartReducer,
    collections: collectionReducer
});

export default combinedReducers;

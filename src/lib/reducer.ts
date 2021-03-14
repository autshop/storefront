import { combineReducers } from "redux";
import variantReducer from "~lib/variant/reducer";
import cartReducer from "~lib/cart/reducer";
import collectionReducer from "~lib/collections/reducer";
import uiReducer from "~lib/ui/reducer";
import { StoreState } from "~lib/state";

const combinedReducers = combineReducers<StoreState>({
    variant: variantReducer,
    cart: cartReducer,
    collections: collectionReducer,
    ui: uiReducer
});

export default combinedReducers;

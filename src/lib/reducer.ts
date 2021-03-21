import { combineReducers } from "redux";
import variantReducer from "~lib/variant/reducer";
import cartReducer from "~lib/cart/reducer";
import collectionReducer from "~lib/collections/reducer";
import uiReducer from "~lib/ui/reducer";
import checkoutReducer from "~lib/checkout/reducer";
import { StoreState } from "~lib/state";

const combinedReducers = combineReducers<StoreState>({
    variant: variantReducer,
    cart: cartReducer,
    collections: collectionReducer,
    ui: uiReducer,
    checkout: checkoutReducer
});

export default combinedReducers;

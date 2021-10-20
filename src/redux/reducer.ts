import { combineReducers } from "redux";
import variantReducer from "~redux/variant/reducer";
import collectionReducer from "~redux/collections/reducer";
import uiReducer from "~redux/ui/reducer";
import checkoutReducer from "~redux/checkout/reducer";
import storefrontPropertyReducer from "~redux/storefrontProperty/reducer";
import { StoreState } from "~redux/state";

const combinedReducers = combineReducers<StoreState>({
    variant: variantReducer,
    collections: collectionReducer,
    ui: uiReducer,
    checkout: checkoutReducer,
    storefrontProperty: storefrontPropertyReducer
});

export default combinedReducers;

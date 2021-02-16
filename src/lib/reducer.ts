import {combineReducers} from "redux";
import variantReducer  from "~lib/variant/reducer";
import {StoreState} from "~lib/state";

const combinedReducers = combineReducers<StoreState>({
    variant: variantReducer
})


export default combinedReducers;
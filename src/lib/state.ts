import { VariantsState, initialState as initialVariantState } from "~lib/variant/reducer";
import { CollectionsState, initialState as initialCollectionsState } from "~lib/collections/reducer";
import { CartState, initialState as initialCartState } from "~lib/cart/reducer";

export type StoreState = {
    variant: VariantsState;
    collections: CollectionsState;
    cart: CartState;
};

const initialState: StoreState = {
    variant: initialVariantState,
    cart: initialCartState,
    collections: initialCollectionsState
};

export default initialState;

import { VariantsState, initialState as initialVariantState } from "~lib/variant/reducer";
import { CollectionsState, initialState as initialCollectionsState } from "~lib/collections/reducer";
import { CartState, initialState as initialCartState } from "~lib/cart/reducer";
import { UiState, initialState as initialUiState } from "~lib/ui/reducer";

export type StoreState = {
    variant: VariantsState;
    collections: CollectionsState;
    cart: CartState;
    ui: UiState;
};

const initialState: StoreState = {
    variant: initialVariantState,
    cart: initialCartState,
    collections: initialCollectionsState,
    ui: initialUiState
};

export default initialState;

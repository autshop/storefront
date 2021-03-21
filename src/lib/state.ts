import { VariantsState, initialState as initialVariantState } from "~lib/variant/reducer";
import { CollectionsState, initialState as initialCollectionsState } from "~lib/collections/reducer";
import { CartState, initialState as initialCartState } from "~lib/cart/reducer";
import { UiState, initialState as initialUiState } from "~lib/ui/reducer";
import { CheckoutState, initialState as initialCheckoutState } from "~lib/checkout/reducer";

export type StoreState = {
    variant: VariantsState;
    collections: CollectionsState;
    cart: CartState;
    ui: UiState;
    checkout: CheckoutState;
};

const initialState: StoreState = {
    variant: initialVariantState,
    cart: initialCartState,
    collections: initialCollectionsState,
    ui: initialUiState,
    checkout: initialCheckoutState
};

export default initialState;

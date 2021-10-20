import { VariantsState, initialState as initialVariantState } from "~redux/variant/reducer";
import { CollectionsState, initialState as initialCollectionsState } from "~redux/collections/reducer";
import { UiState, initialState as initialUiState } from "~redux/ui/reducer";
import { CheckoutState, initialState as initialCheckoutState } from "~redux/checkout/reducer";
import {
    StorefrontPropertyState,
    initialState as initialStorefrontPropertyState
} from "~redux/storefrontProperty/reducer";

export type StoreState = {
    variant: VariantsState;
    collections: CollectionsState;
    ui: UiState;
    checkout: CheckoutState;
    storefrontProperty: StorefrontPropertyState;
};

const initialState: StoreState = {
    variant: initialVariantState,
    collections: initialCollectionsState,
    ui: initialUiState,
    checkout: initialCheckoutState,
    storefrontProperty: initialStorefrontPropertyState
};

export default initialState;

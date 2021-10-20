import { find } from "lodash";
import { StoreState } from "~redux/state";

const getState = (state: StoreState) => state.variant;

export const getVariants = (state: StoreState) => getState(state).variants;

export const getIsLoading = (state: StoreState) => getState(state).isLoading;

export const getVariantById = (state: StoreState, variantId: number) =>
    find(getVariants(state), ({ id }) => id === variantId);

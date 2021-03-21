import { StoreState } from "~lib/state";
import { get } from "lodash";
import { CheckoutStepKey } from "~lib/checkout/types";

const getState = (state: StoreState) => state.checkout;

export const getOrder = (state: StoreState) => getState(state).order;

export const getOrderToken = (state: StoreState) => get(getOrder(state), "token", null);

export const getCheckoutStep = (state: StoreState, checkoutStepKey: CheckoutStepKey) =>
    getState(state).steps[checkoutStepKey];

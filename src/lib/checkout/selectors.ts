import { get, find } from "lodash";
//
import { StoreState } from "~lib/state";
import { CheckoutStepKey } from "~lib/checkout/types";

const getState = (state: StoreState) => state.checkout;

export const getOrder = (state: StoreState) => getState(state).order;

export const getOrderItems = (state: StoreState) => get(getOrder(state), "sizes", []);

export const getOrderId = (state: StoreState) => get(getOrder(state), "id", null);

export const getCheckoutStep = (state: StoreState, checkoutStepKey: CheckoutStepKey) =>
    getState(state).steps[checkoutStepKey];

export const getOrderItemById = (state: StoreState, id: number) =>
    find(getOrderItems(state), ({ id: _id }) => id === _id);

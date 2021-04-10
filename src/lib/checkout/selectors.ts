import { get, find } from "lodash";
//
import { StoreState } from "~lib/state";
import { CheckoutStepKey } from "~lib/checkout/types";
import { isCheckoutStepDone } from "~lib/checkout/helpers/isCheckoutStepDone";

const getState = (state: StoreState) => state.checkout;

export const getOrder = (state: StoreState) => getState(state).order;

export const getOrderItems = (state: StoreState) => get(getOrder(state), "orderSizes", []);

export const getOrderId = (state: StoreState) => get(getOrder(state), "id", null);

export const getCheckoutStep = (state: StoreState, checkoutStepKey: CheckoutStepKey) =>
    getState(state).steps[checkoutStepKey];

export const getOrderState = (state: StoreState) => getOrder(state)?.orderState;

export const getCheckoutStepIsDone = (state: StoreState, checkoutStepKey: CheckoutStepKey) => {
    const orderState = getOrderState(state);
    return isCheckoutStepDone(checkoutStepKey, orderState);
};

export const getOrderItemById = (state: StoreState, id: number) =>
    find(getOrderItems(state), ({ id: _id }) => id === _id);

export const getOrderCustomerEmail = (state: StoreState) => getOrder(state)?.customerEmail;

export const getShippingMethods = (state: StoreState) => getState(state).shippingMethods.shippingMethods;

export const getShippingMethodsIsLoading = (state: StoreState) => getState(state).shippingMethods.isLoading;

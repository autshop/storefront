import { CheckoutStepKey, OrderState } from "~redux/checkout/types";

//TODO HANDLE THIS STATE HANDLING TO REDUX

const checkoutStepRequirements: { [key: number]: OrderState[] } = {
    [CheckoutStepKey.CONTACT]: [
        OrderState.CHECKOUT_CONTACT,
        OrderState.CHECKOUT_ADDRESS,
        OrderState.CHECKOUT_METHOD,
        OrderState.FINALIZED
    ],
    [CheckoutStepKey.ADDRESS]: [OrderState.CHECKOUT_ADDRESS, OrderState.CHECKOUT_METHOD, OrderState.FINALIZED],
    [CheckoutStepKey.METHOD]: [OrderState.CHECKOUT_METHOD, OrderState.FINALIZED]
};

export const isCheckoutStepDone = (checkoutStepKey: CheckoutStepKey, orderState: OrderState) =>
    (checkoutStepRequirements[checkoutStepKey] || []).includes(orderState);

const previousCheckoutStep: { [key: number]: OrderState } = {
    [CheckoutStepKey.CONTACT]: OrderState.INITIAL,
    [CheckoutStepKey.ADDRESS]: OrderState.CHECKOUT_CONTACT,
    [CheckoutStepKey.METHOD]: OrderState.CHECKOUT_ADDRESS,
    [CheckoutStepKey.FINALIZE]: OrderState.CHECKOUT_METHOD
};

export const isCheckoutStepCurrent = (checkoutStepKey: CheckoutStepKey, orderState: OrderState) =>
    previousCheckoutStep[checkoutStepKey] === orderState;

import { CheckoutStepKey, OrderState } from "~lib/checkout/types";

const checkoutStepRequirements: { [key: number]: OrderState[] } = {
    [CheckoutStepKey.CONTACT]: [OrderState.CHECKOUT_CONTACT],
    [CheckoutStepKey.ADDRESS]: [OrderState.CHECKOUT_CONTACT, OrderState.CHECKOUT_ADDRESS],
    [CheckoutStepKey.METHOD]: [OrderState.CHECKOUT_CONTACT, OrderState.CHECKOUT_ADDRESS, OrderState.CHECKOUT_CONTACT]
};

export const isCheckoutStepDone = (checkoutStepKey: CheckoutStepKey, orderState: OrderState) =>
    (checkoutStepRequirements[checkoutStepKey] || []).includes(orderState);

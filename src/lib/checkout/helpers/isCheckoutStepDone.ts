import { CheckoutStepKey, OrderState } from "~lib/checkout/types";

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

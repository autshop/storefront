import { RefObject, useEffect } from "react";
//
import { CheckoutStepKey, OrderState } from "~lib/checkout/types";

const useScrollToCheckoutStep = (
    ref: RefObject<HTMLDivElement>,
    orderState: OrderState,
    checkoutStepKey: CheckoutStepKey
) => {
    const scrollToStep = () => {
        const elementTop = ref.current?.getBoundingClientRect().top || 0;
        window.scroll({
            top: elementTop,
            behavior: "smooth"
        });
    };
    useEffect(() => {
        switch (orderState) {
            case OrderState.INITIAL:
                if (checkoutStepKey === CheckoutStepKey.CONTACT) {
                    scrollToStep();
                }
                break;
            case OrderState.CHECKOUT_CONTACT:
                if (checkoutStepKey === CheckoutStepKey.ADDRESS) {
                    scrollToStep();
                }
                break;
            case OrderState.CHECKOUT_ADDRESS:
                if (checkoutStepKey === CheckoutStepKey.METHOD) {
                    scrollToStep();
                }
                break;
            case OrderState.CHECKOUT_METHOD:
                if (checkoutStepKey === CheckoutStepKey.FINALIZE) {
                    scrollToStep();
                }
                break;
        }
    }, [orderState]);
};

export default useScrollToCheckoutStep;

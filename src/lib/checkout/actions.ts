import { CheckoutStepKey, Order, ShippingMethod } from "~lib/checkout/types";
import { CheckoutContactStepTypes } from "~utils/forms/types/checkout/contactStep";
import { FieldErrors } from "~utils/forms/types";
import { CheckoutAddressStepTypes } from "~utils/forms/types/checkout/addressStep";

export enum CheckoutActionConstants {
    LOAD_CHECKOUT = "CHECKOUT/LOAD_CHECKOUT",
    LOAD_CHECKOUT_SUCCESS = "CHECKOUT/LOAD_CHECKOUT_SUCCESS",
    LOAD_CHECKOUT_ERROR = "CHECKOUT/LOAD_CHECKOUT_ERROR",

    ADD_SIZE = "CHECKOUT/ADD_SIZE",
    ADD_SIZE_SUCCESS = "CHECKOUT/ADD_SIZE_SUCCESS",
    ADD_SIZE_ERROR = "CHECKOUT/ADD_SIZE_ERROR",

    SET_CHECKOUT_CONTACT = "CHECKOUT/SET_CHECKOUT_CONTACT",
    SET_CHECKOUT_CONTACT_SUCCESS = "CHECKOUT/SET_CHECKOUT_CONTACT_SUCCESS",
    SET_CHECKOUT_CONTACT_ERROR = "CHECKOUT/SET_CHECKOUT_CONTACT_ERROR",

    SET_CHECKOUT_ADDRESS = "CHECKOUT/SET_CHECKOUT_ADDRESS",
    SET_CHECKOUT_ADDRESS_SUCCESS = "CHECKOUT/SET_CHECKOUT_ADDRESS_SUCCESS",
    SET_CHECKOUT_ADDRESS_ERROR = "CHECKOUT/SET_CHECKOUT_ADDRESS_ERROR",

    SET_CHECKOUT_SHIPPING_METHOD = "CHECKOUT/SET_CHECKOUT_SHIPPING_METHOD",
    SET_CHECKOUT_SHIPPING_METHOD_SUCCESS = "CHECKOUT/SET_CHECKOUT_SHIPPING_METHOD_SUCCESS",
    SET_CHECKOUT_SHIPPING_METHOD_ERROR = "CHECKOUT/SET_CHECKOUT_SHIPPING_METHOD_ERROR",

    SET_CHECKOUT_STEP = "CHECKOUT/SET_CHECKOUT_STEP",
    SET_CHECKOUT_STEP_IS_LOADING = "CHECKOUT/SET_CHECKOUT_STEP_IS_LOADING",
    CLEAR_CHECKOUT_STEP_ERROR = "CHECKOUT/CLEAR_CHECKOUT_STEP_ERROR",

    FINALIZE_ORDER = "CHECKOUT/FINALIZE_ORDER",
    FINALIZE_ORDER_SUCCESS = "CHECKOUT/FINALIZE_ORDER_SUCCESS",
    FINALIZE_ORDER_ERROR = "CHECKOUT/FINALIZE_ORDER_ERROR",

    LOAD_SHIPPING_METHODS = "CHECKOUT/LOAD_SHIPPING_METHODS",
    LOAD_SHIPPING_METHODS_SUCCESS = "CHECKOUT/LOAD_SHIPPING_METHODS_SUCCESS",
    LOAD_SHIPPING_METHODS_ERROR = "CHECKOUT/LOAD_SHIPPING_METHODS_ERROR"
}

export const loadCheckoutAction = () => ({
    type: CheckoutActionConstants.LOAD_CHECKOUT
});

export const loadCheckoutSuccessAction = (order: Order) => ({
    type: CheckoutActionConstants.LOAD_CHECKOUT_SUCCESS,
    payload: {
        order
    }
});

export const loadCheckoutActionErrorAction = (error: string) => ({
    type: CheckoutActionConstants.LOAD_CHECKOUT_ERROR,
    payload: {
        error
    }
});

export const addSizeAction = (sizeId: number) => ({
    type: CheckoutActionConstants.ADD_SIZE,
    payload: { sizeId }
});

export const addSizeSuccessAction = (order: Order) => ({
    type: CheckoutActionConstants.ADD_SIZE_SUCCESS,
    payload: {
        order
    }
});

export const addSizeActionErrorAction = (error: string) => ({
    type: CheckoutActionConstants.ADD_SIZE_ERROR,
    payload: {
        error
    }
});

export const setCheckoutContactAction = (contactData: CheckoutContactStepTypes) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_CONTACT,
    payload: {
        contactData
    }
});

export const setCheckoutContactSuccessAction = (order: Order) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_CONTACT_SUCCESS,
    payload: {
        order
    }
});

export const setCheckoutContactErrorAction = (errors: FieldErrors) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_CONTACT_ERROR,
    payload: {
        errors
    }
});

export const setCheckoutAddressAction = (addressData: CheckoutAddressStepTypes) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_ADDRESS,
    payload: {
        addressData
    }
});

export const setCheckoutAddressSuccessAction = (order: Order) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_ADDRESS_SUCCESS,
    payload: {
        order
    }
});

export const setCheckoutAddressErrorAction = (errors: FieldErrors) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_ADDRESS_ERROR,
    payload: {
        errors
    }
});

export const setCheckoutShippingMethodAction = (shippingMethodId: number) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD,
    payload: {
        shippingMethodId
    }
});

export const setCheckoutShippingMethodSuccessAction = (order: Order) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD_SUCCESS,
    payload: {
        order
    }
});

export const setCheckoutShippingMethodErrorAction = (error: string) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD_ERROR,
    payload: {
        error
    }
});

export const setCheckoutStepIsLoadingAction = (checkoutStepKey: CheckoutStepKey, isLoading = true) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_STEP_IS_LOADING,
    payload: {
        checkoutStepKey,
        isLoading
    }
});

export const clearCheckoutStepErrorsAction = (checkoutStepKey: CheckoutStepKey) => ({
    type: CheckoutActionConstants.CLEAR_CHECKOUT_STEP_ERROR,
    payload: {
        checkoutStepKey
    }
});

export const loadShippingMethodsAction = () => ({
    type: CheckoutActionConstants.LOAD_SHIPPING_METHODS
});

export const loadShippingMethodsSuccessAction = (shippingMethods: ShippingMethod[]) => ({
    type: CheckoutActionConstants.LOAD_SHIPPING_METHODS_SUCCESS,
    payload: {
        shippingMethods
    }
});

export const loadShippingMethodsErrorAction = (error: string) => ({
    type: CheckoutActionConstants.LOAD_SHIPPING_METHODS_ERROR,
    payload: {
        error
    }
});

export const finalizeOrderAction = () => ({
    type: CheckoutActionConstants.FINALIZE_ORDER
});

export const finalizeOrderSuccessAction = (order: Order) => ({
    type: CheckoutActionConstants.FINALIZE_ORDER_SUCCESS,
    payload: {
        order
    }
});

export const finalizeOrderErrorAction = (error: string) => ({
    type: CheckoutActionConstants.FINALIZE_ORDER_ERROR,
    payload: {
        error
    }
});

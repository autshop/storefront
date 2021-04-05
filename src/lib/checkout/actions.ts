import { CheckoutStepKey, Order } from "~lib/checkout/types";
import { CheckoutAddressStepTypes, CheckoutContactStepTypes } from "~utils/forms/types";

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

    SET_CHECKOUT_STEP = "CHECKOUT/SET_CHECKOUT_STEP"
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

export const setCheckoutContact = (contactData: CheckoutContactStepTypes) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_CONTACT,
    payload: {
        contactData
    }
});

export const setCheckoutContactSuccess = (order: Order) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_CONTACT_SUCCESS,
    payload: {
        order
    }
});

export const setCheckoutContactError = (error: string) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_CONTACT_ERROR,
    payload: {
        error
    }
});

export const setCheckoutAddress = (addressData: CheckoutAddressStepTypes) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_ADDRESS,
    payload: {
        addressData
    }
});

export const setCheckoutAddressSuccess = (order: Order) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_ADDRESS_SUCCESS,
    payload: {
        order
    }
});

export const setCheckoutAddressError = (error: string) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_ADDRESS_ERROR,
    payload: {
        error
    }
});

export const setCheckoutShippingMethod = (shippingMethodId: number) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD,
    payload: {
        shippingMethodId
    }
});

export const setCheckoutShippingMethodSuccess = (order: Order) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD_SUCCESS,
    payload: {
        order
    }
});

export const setCheckoutShippingMethodError = (error: string) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD_ERROR,
    payload: {
        error
    }
});

export const setCheckoutStep = (step: CheckoutStepKey) => ({
    type: CheckoutActionConstants.SET_CHECKOUT_STEP,
    payload: {
        step
    }
});

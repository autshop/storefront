import { Variant, VariantSize } from "~lib/variant/types";

export enum CheckoutStepKey {
    CONTACT,
    ADDRESS,
    METHOD,
    FINAL
}

export type CheckoutStep = {
    isLoading: boolean;
    error: string;
};

export enum OrderState {
    CHECKOUT_CONTACT = "CHECKOUT_CONTACT",
    CHECKOUT_ADDRESS = "CHECKOUT_ADDRESS",
    CHECKOUT_METHOD = "CHECKOUT_METHOD",
    FINALIZED = "FINALIZED"
}

export type OrderContact = {
    email: string;
};

export type OrderAddress = {
    id: number;
    firstname: string;
    lastname: string;
    country: string;
    addressLine: string;
    postalCode: number;
};

export type OrderShippingMethod = {
    id: number;
    name: string;
};

export type Order = {
    id: number;
    customerEmail: string;
    address: OrderAddress;
    //shippingMethod: OrderShippingMethod;
    sizes: VariantSize[];
    orderState: OrderState;
};

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
    CHECKOUT_CONTACT,
    CHECKOUT_ADDRESS,
    CHECKOUT_METHOD,
    FINALIZED
}

export type OrderContact = {
    email: string;
};

export type OrderAddress = {
    firstname: string;
    lastname: string;
    country: string;
    addressLine: string;
    postalCode: number;
    comment: string;
};

export type OrderShippingMethod = {
    id: number;
    name: string;
};

export type OrderItems = {
    id: number;
    variant: Variant;
    size: VariantSize;
};

export type Order = {
    id: number;
    token: string;
    contact: OrderContact;
    address: OrderAddress;
    shippingMethod: OrderShippingMethod;
    items: OrderItems[];
    orderState: OrderState;
};

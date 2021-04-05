import { VariantSize } from "~lib/variant/types";
import { FieldErrors } from "~utils/forms/types";

export enum CheckoutStepKey {
    CONTACT,
    ADDRESS,
    METHOD,
    FINAL
}

export type CheckoutStep = {
    isLoading: boolean;
    errors: FieldErrors;
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

export type OrderSize = {
    id: number;
    quantity: number;
    size: VariantSize;
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
    sizes: OrderSize[];
    orderState: OrderState;
};

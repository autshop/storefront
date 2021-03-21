export type CheckoutContactStepTypes = {
    email: string | null;
};

export type CheckoutAddressStepTypes = {
    firstname: string | null;
    lastname: string | null;
    country: string | null;
    addressLine: string | null;
    postalCode: number | null;
    comment: string | null;
};

import { ApiFormFieldPair } from "~utils/forms/types";

export enum CheckoutAddressStepFieldNames {
    FIRST_NAME = "ADDRESS/FIRST_NAME",
    LAST_NAME = "ADDRESS/LAST_NAME",
    COUNTRY = "ADDRESS/COUNTRY",
    ADDRESS_LINE = "ADDRESS/ADDRESS_LINE",
    POSTAL_CODE = "ADDRESS/POSTAL_CODE",
    PHONE_NUMBER = "ADDRESS/PHONE_NUMBER",
    COMMENT = "ADDRESS/COMMENT"
}

export type CheckoutAddressStepTypes = {
    [CheckoutAddressStepFieldNames.FIRST_NAME]: string | null;
    [CheckoutAddressStepFieldNames.LAST_NAME]: string | null;
    [CheckoutAddressStepFieldNames.COUNTRY]: string | null;
    [CheckoutAddressStepFieldNames.ADDRESS_LINE]: string | null;
    [CheckoutAddressStepFieldNames.POSTAL_CODE]: number | null;
    [CheckoutAddressStepFieldNames.PHONE_NUMBER]: string | null;
    [CheckoutAddressStepFieldNames.COMMENT]: string | null;
};

export const fieldPairs: ApiFormFieldPair[] = [
    { hookFormField: CheckoutAddressStepFieldNames.FIRST_NAME, apiField: "firstName" },
    { hookFormField: CheckoutAddressStepFieldNames.LAST_NAME, apiField: "lastName" },
    { hookFormField: CheckoutAddressStepFieldNames.COUNTRY, apiField: "country" },
    { hookFormField: CheckoutAddressStepFieldNames.ADDRESS_LINE, apiField: "addressLine" },
    { hookFormField: CheckoutAddressStepFieldNames.POSTAL_CODE, apiField: "postalCode" },
    { hookFormField: CheckoutAddressStepFieldNames.PHONE_NUMBER, apiField: "phoneNumber" },
    { hookFormField: CheckoutAddressStepFieldNames.COMMENT, apiField: "comment" }
];

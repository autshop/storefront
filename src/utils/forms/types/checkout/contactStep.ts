import { ApiFormFieldPair } from "~utils/forms/types";

export enum CheckoutContactStepFieldNames {
    EMAIL = "CONTACT/EMAIL"
}

export type CheckoutContactStepTypes = {
    [CheckoutContactStepFieldNames.EMAIL]: string | null;
};

export const fieldPairs: ApiFormFieldPair[] = [
    { hookFormField: CheckoutContactStepFieldNames.EMAIL, apiField: "customerEmail" }
];

export const contactStepApiFieldMapper = {
    email: CheckoutContactStepFieldNames.EMAIL
};

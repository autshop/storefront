import { find, get, keys } from "lodash";
import { AxiosError } from "axios";

export type FieldErrors = {
    [field: string]: string;
};

export type ApiFormFieldPair = {
    apiField: string;
    hookFormField: string;
};

export const createApiFormFieldToHookFormFieldTransformer = (fieldPairs: ApiFormFieldPair[]) => (apiField: string) =>
    get(
        find(fieldPairs, fieldPair => fieldPair.apiField === apiField),
        "hookFormField",
        null
    );

export const createApiFieldErrorTransformer = (fieldPairs: ApiFormFieldPair[]) => (e: AxiosError) => {
    const validationErrors = get(e, "response.data.error", {});
    const transformedValidationErrors = {};

    const transformer = createApiFormFieldToHookFormFieldTransformer(fieldPairs);

    (keys(validationErrors) || []).forEach(key => {
        const hookFormKey = transformer(key);
        transformedValidationErrors[hookFormKey] = validationErrors[key];
    });

    return transformedValidationErrors;
};

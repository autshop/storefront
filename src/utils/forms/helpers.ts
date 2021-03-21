import { FieldErrors } from "react-hook-form/dist/types/errors";
import { get } from "lodash";

export type FieldError = {
    error: boolean;
    helperText: string;
};

export const createFieldErrorFromHookFromError = (field: string, errors: FieldErrors, message: string): FieldError => {
    const hasError = !!get(errors, `${field}`, "");
    return {
        error: hasError,
        helperText: hasError ? message : ""
    };
};

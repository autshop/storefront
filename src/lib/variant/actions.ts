import { Variant } from "~lib/variant/types";

export enum VariantActionConstants {
    LOAD_VARIANTS = "VARIANT/LOAD_VARIANTS",
    LOAD_VARIANTS_SUCCESS = "VARIANT/LOAD_VARIANTS_SUCCESS",
    LOAD_VARIANTS_ERROR = "VARIANT/LOAD_VARIANTS_ERROR"
}

export const loadVariantsAction = () => ({
    type: VariantActionConstants.LOAD_VARIANTS
});

export const loadVariantsSuccessAction = (variants: Variant[]) => ({
    type: VariantActionConstants.LOAD_VARIANTS_SUCCESS,
    payload: {
        variants
    }
});

export const loadVariantsErrorAction = (error: string) => ({
    type: VariantActionConstants.LOAD_VARIANTS_ERROR,
    payload: {
        error
    }
});

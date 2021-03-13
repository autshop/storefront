import { VariantSize } from "~lib/variant/types";

export enum CartActionConstants {
    ADD_SIZE = "CART/ADD_SIZE",
    ADD_SIZE_SUCCESS = "CART/ADD_SIZE_SUCCESS",
    ADD_SIZE_ERROR = "CART/ADD_SIZE_ERROR"
}

export const addSizeAction = (sizeId: number) => ({
    type: CartActionConstants.ADD_SIZE,
    payload: { sizeId }
});

export const addSizeSuccessAction = (variantSizes: VariantSize[]) => ({
    type: CartActionConstants.ADD_SIZE_SUCCESS,
    payload: { variantSizes }
});

export const addSizeErrorAction = (error: string) => ({
    type: CartActionConstants.ADD_SIZE_ERROR,
    payload: {
        error
    }
});

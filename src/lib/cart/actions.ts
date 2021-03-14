import { VariantSize } from "~lib/variant/types";
import { Collection } from "~lib/collections/types";

export enum CartActionConstants {
    LOAD_CART = "CART/LOAD_CART",
    LOAD_CART_SUCCESS = "CART/LOAD_CART_SUCCESS",
    LOAD_CART_ERROR = "CART/LOAD_CART_ERROR",
    ADD_SIZE = "CART/ADD_SIZE",
    ADD_SIZE_SUCCESS = "CART/ADD_SIZE_SUCCESS",
    ADD_SIZE_ERROR = "CART/ADD_SIZE_ERROR"
}

export const loadCartAction = () => ({
    type: CartActionConstants.LOAD_CART
});

//TODO TYPE
export const loadCartActionSuccessAction = (cart: any) => ({
    type: CartActionConstants.LOAD_CART_SUCCESS,
    payload: {
        cart
    }
});

export const loadCartActionErrorAction = (error: string) => ({
    type: CartActionConstants.LOAD_CART_ERROR,
    payload: {
        error
    }
});

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

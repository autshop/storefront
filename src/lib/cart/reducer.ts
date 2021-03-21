import { Reducer } from "redux";
import { produce } from "immer";
//
import { CartActionConstants } from "~lib/cart/actions";
import { Cart } from "~lib/cart/types";

export type CartState = {
    cart: Cart;
    isLoading: boolean;
    error: string;
};

export const initialState: CartState = {
    cart: [],
    isLoading: false,
    error: ""
};

const reducer: Reducer<CartState> = (state = initialState, action): CartState => {
    switch (action.type) {
        case CartActionConstants.LOAD_CART: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case CartActionConstants.LOAD_CART_SUCCESS: {
            return produce(state, draft => {
                const { cart } = action.payload;
                draft.isLoading = false;
                draft.cart = cart;
            });
        }
        case CartActionConstants.LOAD_CART_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.isLoading = false;
                draft.error = error;
            });
        }
        case CartActionConstants.ADD_SIZE: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case CartActionConstants.ADD_SIZE_SUCCESS: {
            return produce(state, draft => {
                const { cart } = action.payload;
                draft.isLoading = false;
                draft.cart = cart;
            });
        }
        case CartActionConstants.ADD_SIZE_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.isLoading = false;
                draft.error = error;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

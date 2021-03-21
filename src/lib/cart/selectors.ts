import { get } from "lodash";
//
import { StoreState } from "~lib/state";

const getState = (state: StoreState) => state.cart;

export const getCart = (state: StoreState) => getState(state).cart;

export const getIsCartLoading = (state: StoreState) => getState(state).isLoading;

export const getCartError = (state: StoreState) => getState(state).error;

export const getCartItemById = (state: StoreState, id: number) => get(getCart(state), `[${id}]`, null);

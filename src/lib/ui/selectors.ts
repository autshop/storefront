import { StoreState } from "~lib/state";

const getState = (state: StoreState) => state.ui;

export const getIsCartShown = (state: StoreState) => getState(state).isCartShown;

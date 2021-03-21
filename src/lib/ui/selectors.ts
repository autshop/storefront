import { StoreState } from "~lib/state";

const getState = (state: StoreState) => state.ui;

export const getIsCartShown = (state: StoreState) => getState(state).isCartShown;

export const getIsMobileWindow = (state: StoreState) => getState(state).isMobileWindow;

export const getIsLoadingScreenShown = (state: StoreState) => getState(state).isLoadingScreenShown;

export const getLoadingScreenText = (state: StoreState) => getState(state).loadingScreenText;

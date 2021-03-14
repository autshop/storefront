import { StoreState } from "~lib/state";

const getState = (state: StoreState) => state.collections;

export const getCollections = (state: StoreState) => getState(state).collections;

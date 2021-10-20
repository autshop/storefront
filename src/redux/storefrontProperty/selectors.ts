import { find, get } from "lodash";
//
import { StoreState } from "~redux/state";

export const getState = (state: StoreState) => state.storefrontProperty;

export const getStorefrontProperties = (state: StoreState) => getState(state).storefrontProperties;

export const getStorefrontPropertiesIsLoading = (state: StoreState) => getState(state).isLoading;

export const createGetStorefrontPropertyByKey = (key: string) => (state: StoreState) =>
    find(getStorefrontProperties(state), ({ key: __key }) => __key === key);

export const createGetStorefrontPropertyValueByKey = (key: string) => (state: StoreState) =>
    get(
        find(getStorefrontProperties(state), ({ key: __key }) => __key === key),
        "value",
        ""
    );

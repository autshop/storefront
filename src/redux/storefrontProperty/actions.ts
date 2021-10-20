import { StorefrontProperty } from "~redux/storefrontProperty/types";

export enum StorefrontPropertyActionConstants {
    LOAD_STOREFRONT_PROPERTIES = "STOREFRONT_PROPERTY/LOAD_STOREFRONT_PROPERTIES",
    LOAD_STOREFRONT_PROPERTIES_SUCCESS = "STOREFRONT_PROPERTY/LOAD_STOREFRONT_PROPERTIES_SUCCESS",
    LOAD_STOREFRONT_PROPERTIES_ERROR = "STOREFRONT_PROPERTY/LOAD_STOREFRONT_PROPERTIES_ERROR"
}

export const loadStorefrontPropertiesAction = () => ({
    type: StorefrontPropertyActionConstants.LOAD_STOREFRONT_PROPERTIES
});

export const loadStorefrontPropertiesSuccessAction = (storefrontProperties: StorefrontProperty[]) => ({
    type: StorefrontPropertyActionConstants.LOAD_STOREFRONT_PROPERTIES_SUCCESS,
    payload: {
        storefrontProperties
    }
});

export const loadStorefrontPropertiesErrorAction = (error: string) => ({
    type: StorefrontPropertyActionConstants.LOAD_STOREFRONT_PROPERTIES_ERROR,
    payload: {
        error
    }
});

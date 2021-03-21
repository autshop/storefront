export enum uiActionConstants {
    SHOW_CART = "UI/SHOW_CART",
    SET_IS_MOBILE_WINDOW = "UI/SET_IS_MOBILE_WINDOW",
    SET_IS_LOADING_SCREEN_SHOWN = "UI/SET_IS_LOADING_SCREEN_SHOWN"
}

export const showCartAction = (isCartShown = true) => ({
    type: uiActionConstants.SHOW_CART,
    payload: {
        isCartShown
    }
});

export const setIsMobileWindow = (isMobileWindow: boolean) => ({
    type: uiActionConstants.SET_IS_MOBILE_WINDOW,
    payload: {
        isMobileWindow
    }
});

export const setIsLoadingScreenShown = (isShown: boolean, text = "") => ({
    type: uiActionConstants.SET_IS_LOADING_SCREEN_SHOWN,
    payload: {
        isShown,
        text
    }
});

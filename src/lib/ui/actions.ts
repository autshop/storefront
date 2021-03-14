export enum uiActionConstants {
    SHOW_CART = "UI/SHOW_CART"
}

export const showCartAction = (isCartShown = true) => ({
    type: uiActionConstants.SHOW_CART,
    payload: {
        isCartShown
    }
});

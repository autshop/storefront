export enum AppActionConstants {
    INITIALIZE_APP = "APP/INITIALIZE_APP",
    SET_IS_APP_INITIALIZED = "APP/SET_IS_APP_INITIALIZED"
}

export const initializeAppAction = () => ({
    type: AppActionConstants.INITIALIZE_APP
});

export const setIsAppInitializedAction = (isAppInitialized = true) => ({
    type: AppActionConstants.SET_IS_APP_INITIALIZED,
    payload: {
        isAppInitialized
    }
});

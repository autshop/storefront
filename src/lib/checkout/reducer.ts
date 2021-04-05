import { Reducer } from "redux";
import { produce } from "immer";
//
import { CheckoutStep, CheckoutStepKey, Order } from "~lib/checkout/types";
import { CheckoutActionConstants } from "~lib/checkout/actions";

export type CheckoutState = {
    order: Order;
    isLoading: boolean;
    error: string;
    currentStep: CheckoutStepKey;
    steps: {
        [key: string]: CheckoutStep;
    };
};

export const initialState: CheckoutState = {
    order: null,
    isLoading: false,
    error: "",
    currentStep: CheckoutStepKey.CONTACT,
    steps: {
        [CheckoutStepKey.CONTACT]: { isLoading: false, error: "" },
        [CheckoutStepKey.ADDRESS]: { isLoading: false, error: "" },
        [CheckoutStepKey.METHOD]: { isLoading: false, error: "" },
        [CheckoutStepKey.FINAL]: { isLoading: false, error: "" }
    }
};

const reducer: Reducer<CheckoutState> = (state = initialState, action): CheckoutState => {
    switch (action.type) {
        case CheckoutActionConstants.LOAD_CHECKOUT: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case CheckoutActionConstants.LOAD_CHECKOUT_SUCCESS: {
            return produce(state, draft => {
                const { order } = action.payload;
                draft.isLoading = false;
                draft.order = order;
            });
        }
        case CheckoutActionConstants.LOAD_CHECKOUT_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.isLoading = false;
                draft.error = error;
            });
        }
        //
        case CheckoutActionConstants.ADD_SIZE: {
            return produce(state, draft => {
                draft.isLoading = true;
            });
        }
        case CheckoutActionConstants.ADD_SIZE_SUCCESS: {
            return produce(state, draft => {
                const { order } = action.payload;
                draft.isLoading = false;
                draft.order = order;
            });
        }
        case CheckoutActionConstants.ADD_SIZE_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.isLoading = false;
                draft.error = error;
            });
        }
        //
        case CheckoutActionConstants.SET_CHECKOUT_CONTACT: {
            return produce(state, draft => {
                draft.steps[CheckoutStepKey.CONTACT].isLoading = true;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_CONTACT_SUCCESS: {
            return produce(state, draft => {
                const { order } = action.payload;
                draft.steps[CheckoutStepKey.CONTACT].isLoading = false;
                draft.order = order;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_CONTACT_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.steps[CheckoutStepKey.CONTACT].isLoading = false;
                draft.steps[CheckoutStepKey.CONTACT].error = error;
            });
        }
        //
        case CheckoutActionConstants.SET_CHECKOUT_ADDRESS: {
            return produce(state, draft => {
                draft.steps[CheckoutStepKey.ADDRESS].isLoading = true;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_ADDRESS_SUCCESS: {
            return produce(state, draft => {
                const { order } = action.payload;
                draft.steps[CheckoutStepKey.ADDRESS].isLoading = false;
                draft.order = order;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_ADDRESS_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.steps[CheckoutStepKey.ADDRESS].isLoading = false;
                draft.steps[CheckoutStepKey.ADDRESS].error = error;
            });
        }
        //
        case CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD: {
            return produce(state, draft => {
                draft.steps[CheckoutStepKey.METHOD].isLoading = true;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD_SUCCESS: {
            return produce(state, draft => {
                const { order } = action.payload;
                draft.steps[CheckoutStepKey.METHOD].isLoading = false;
                draft.order = order;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_SHIPPING_METHOD_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.steps[CheckoutStepKey.METHOD].isLoading = false;
                draft.steps[CheckoutStepKey.METHOD].error = error;
            });
        }
        //

        case CheckoutActionConstants.SET_CHECKOUT_STEP: {
            return produce(state, draft => {
                const { step } = action.payload;
                draft.currentStep = step;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

import { Reducer } from "redux";
import { produce } from "immer";
//
import { CheckoutStep, CheckoutStepKey, Order, ShippingMethod } from "~lib/checkout/types";
import { CheckoutActionConstants } from "~lib/checkout/actions";

export type CheckoutState = {
    order: Order;
    isLoading: boolean;
    error: string;
    currentStep: CheckoutStepKey;
    steps: {
        [key: string]: CheckoutStep;
    };
    shippingMethods: {
        isLoading: boolean;
        error: string;
        shippingMethods: ShippingMethod[];
    };
};

export const initialState: CheckoutState = {
    order: null,
    isLoading: false,
    error: "",
    currentStep: CheckoutStepKey.CONTACT,
    steps: {
        [CheckoutStepKey.CONTACT]: { isLoading: false, errors: {} },
        [CheckoutStepKey.ADDRESS]: { isLoading: false, errors: {} },
        [CheckoutStepKey.METHOD]: { isLoading: false, errors: {} },
        [CheckoutStepKey.FINALIZE]: { isLoading: false, errors: {} }
    },
    shippingMethods: {
        isLoading: false,
        error: "",
        shippingMethods: []
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
        case CheckoutActionConstants.SET_CHECKOUT_CONTACT_SUCCESS: {
            return produce(state, draft => {
                const { order } = action.payload;
                draft.steps[CheckoutStepKey.CONTACT].isLoading = false;
                draft.order = order;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_CONTACT_ERROR: {
            return produce(state, draft => {
                const { errors } = action.payload;
                draft.steps[CheckoutStepKey.CONTACT].isLoading = false;
                draft.steps[CheckoutStepKey.CONTACT].errors = errors;
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
                const { errors } = action.payload;
                draft.steps[CheckoutStepKey.ADDRESS].isLoading = false;
                draft.steps[CheckoutStepKey.ADDRESS].errors = errors;
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
                draft.steps[CheckoutStepKey.METHOD].errors = error;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_STEP: {
            return produce(state, draft => {
                const { step } = action.payload;
                draft.currentStep = step;
            });
        }
        case CheckoutActionConstants.LOAD_SHIPPING_METHODS: {
            return produce(state, draft => {
                draft.shippingMethods.isLoading = true;
            });
        }
        case CheckoutActionConstants.LOAD_SHIPPING_METHODS_SUCCESS: {
            return produce(state, draft => {
                const { shippingMethods } = action.payload;
                draft.shippingMethods.isLoading = false;
                draft.shippingMethods.shippingMethods = shippingMethods;
            });
        }
        case CheckoutActionConstants.LOAD_SHIPPING_METHODS_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.shippingMethods.isLoading = false;
                draft.shippingMethods.error = error;
            });
        }
        case CheckoutActionConstants.SET_CHECKOUT_STEP_IS_LOADING: {
            return produce(state, draft => {
                const { isLoading, checkoutStepKey } = action.payload;
                draft.steps[checkoutStepKey].isLoading = isLoading;
            });
        }
        case CheckoutActionConstants.CLEAR_CHECKOUT_STEP_ERROR: {
            return produce(state, draft => {
                const { checkoutStepKey } = action.payload;
                draft.steps[checkoutStepKey].errors = {};
            });
        }

        case CheckoutActionConstants.FINALIZE_ORDER_SUCCESS: {
            return produce(state, draft => {
                const { order } = action.payload;
                draft.steps[CheckoutStepKey.FINALIZE].isLoading = false;
                draft.order = order;
            });
        }
        case CheckoutActionConstants.FINALIZE_ORDER_ERROR: {
            return produce(state, draft => {
                const { error } = action.payload;
                draft.steps[CheckoutStepKey.FINALIZE].isLoading = false;
                draft.steps[CheckoutStepKey.FINALIZE].errors = error;
            });
        }
        default: {
            return state;
        }
    }
};
export default reducer;

import {VariantsState, initialState as initialVariantState} from "~lib/variant/reducer";

export type StoreState = {
    variant: VariantsState
}

const initialState: StoreState = {
    variant: initialVariantState

}

export default initialState;
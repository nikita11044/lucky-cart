import {asyncActions as productsAsyncActions, slice as productsSlice} from "./products-reducer";

const productsActions = {
    ...productsAsyncActions,
    ...productsSlice.actions
}

const productsReducer = productsSlice.reducer

export {
    productsActions,
    productsReducer
}
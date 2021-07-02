import { Shop } from "./Shop";
import {productsAsyncActions, productsSlice} from "./Product";

const productsActions = {
    ...productsAsyncActions,
    ...productsSlice.actions
}

const productsReducer = productsSlice.reducer

export {
    productsActions,
    productsReducer,
    Shop
}
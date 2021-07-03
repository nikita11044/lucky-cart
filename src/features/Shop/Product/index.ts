import {Product} from './Product';
import {asyncActions as productsAsyncActions, slice as productsSlice} from "./products-reducer";
import * as productsSelectors from './selectors'

export {
    Product,
    productsAsyncActions,
    productsSlice,
    productsSelectors
}
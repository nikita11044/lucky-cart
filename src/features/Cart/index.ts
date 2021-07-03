import { Cart } from "./Cart";
import { slice as cartSlice } from './cart-reducer'
import * as cartSelectors from './selectors'

const cartActions = {
    ...cartSlice.actions
}

const cartReducer = cartSlice.reducer

export {
    cartActions,
    cartReducer,
    Cart,
    cartSelectors
}
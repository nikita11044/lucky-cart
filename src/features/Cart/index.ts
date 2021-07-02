import { Cart } from "./Cart";
import { asyncActions as cartAsyncActions } from "./cart-reducer";
import { slice as cartSlice } from './cart-reducer'

const cartActions = {
    ...cartAsyncActions,
    ...cartSlice.actions
}

const cartReducer = cartSlice.reducer

export {
    cartActions,
    cartReducer,
    Cart
}
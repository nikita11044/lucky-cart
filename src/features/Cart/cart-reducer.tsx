import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductInCart} from "../../api/types";

const initialState: CartStateType = {
    cart: [],
    totalPrice: 0
}

export const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<{ product: IProductInCart }>) {
            const index = state.cart.findIndex(product => product.id === action.payload.product.id)
            if (index < 0) {
                state.cart.push({...action.payload.product})
                state.totalPrice += action.payload.product.price
            }
        },
        removeProductFromCart(state, action: PayloadAction<{ id: string }>) {
            const index = state.cart.findIndex(product => product.id === action.payload.id)
            if (index > -1) {
                state.cart.splice(index, 1)
            }
        },
        changeProductQuantityInCart(state, action: PayloadAction<{ id: string, quantityInCart: number }>) {
            const index = state.cart.findIndex(product => product.id === action.payload.id)
            state.cart[index].quantityInCart = action.payload.quantityInCart
        },
        changeTotalPrice(state, action: PayloadAction<{ id: string, newTotalPrice: number }>) {
            const index = state.cart.findIndex(product => product.id === action.payload.id)
        }
    },
})

// types
type CartStateType = {
    cart: IProductInCart[],
    totalPrice: number
}
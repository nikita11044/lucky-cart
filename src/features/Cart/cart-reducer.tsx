import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductInCart} from "../../api/types";
import {log} from "util";

const initialState: CartStateType = {
    cart: [],
    totalPrice: 0
}

export const slice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProductToCart(state, action: PayloadAction<{ product: IProductInCart }>) {
            const {price, priceWithDiscount} = action.payload.product
            const index = state.cart.findIndex(product => product.id === action.payload.product.id)
            if (index < 0) {
                state.cart.push({...action.payload.product})
                state.totalPrice = calculatePrice(state.totalPrice, price, 1, "+", priceWithDiscount)
            }
        },
        removeProductFromCart(state, action: PayloadAction<{ id: string }>) {
            const index = state.cart.findIndex(product => product.id === action.payload.id)
            if (index > -1) {
                const {price, priceWithDiscount} = state.cart[index]

                state.totalPrice = calculatePrice(state.totalPrice, price, 1, '-', priceWithDiscount)

                state.cart.splice(index, 1)
            }
        },
        changeProductQuantityInCart(state, action: PayloadAction<{ id: string, newQuantity: number, trigger: '+' | '-' }>) {
            const index = state.cart.findIndex(product => product.id === action.payload.id)
            const {trigger, newQuantity} = action.payload
            const {price, priceWithDiscount} = state.cart[index]

            state.cart[index].quantityInCart = newQuantity

            state.totalPrice = calculatePrice(state.totalPrice, price, 1, trigger, priceWithDiscount)

            state.cart[index].quantityInCart = action.payload.newQuantity
        }
    },
})

// helpers

function calculatePrice(totalPrice: number, price: number, quantity: number, trigger: '+' | '-', priceWithDiscount?: number) {
    switch (trigger) {
        case "+": {
            const change = priceWithDiscount ?  +(priceWithDiscount * quantity).toFixed(2) : +(price * quantity).toFixed(2)
            return +(totalPrice += change).toFixed(2)
        }
        case "-": {
            const change = priceWithDiscount ?  +(priceWithDiscount * quantity).toFixed(2) : +(price * quantity).toFixed(2)
            return +(totalPrice -= change).toFixed(2)
        }
    }

}

// types
type CartStateType = {
    cart: IProductInCart[],
    totalPrice: number
}
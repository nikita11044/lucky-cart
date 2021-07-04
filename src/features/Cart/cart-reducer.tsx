import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IProductInCart, IProductInStore} from "../../api/types";

export const slice = createSlice({
    name: 'cart',
    initialState: [] as IProductInCart[],
    reducers: {
        addProductToCart(state, action: PayloadAction<{ product: IProductInCart }>) {
            const index = state.findIndex(product => product.id === action.payload.product.id)
            if (index < 0) state.push({...action.payload.product})
        },
        removeProductFromCart(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex(product => product.id === action.payload.id)
            if (index > -1) {
                state.splice(index, 1)
            }
        },
        changeProductQuantityInCart(state, action: PayloadAction<{ id: string, quantityInCart: number }>) {
            const index = state.findIndex(product => product.id === action.payload.id)
            console.log(state[index].quantityInCart)
            console.log(action.payload.quantityInCart)
            state[index].quantityInCart = action.payload.quantityInCart
            console.log(state[index].quantityInCart)
        }
    },
})
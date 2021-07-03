import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ProductDomainType} from "../../api/types";

export const slice = createSlice({
    name: 'cart',
    initialState: [] as ProductDomainType[],
    reducers: {
        addProductToCart(state, action: PayloadAction<{ product: ProductDomainType }>) {
            state.push({...action.payload.product})
        },
        removeProductFromCart(state, action: PayloadAction<{ id: string }>) {
            const index = state.findIndex(product => product.id === action.payload.id)
            if (index > -1) {
                state.splice(index, 1)
            }
        },
        changeProductQuantity(state, action: PayloadAction<{ id: string, quantity: number }>) {
            const index = state.findIndex(product => product.id === action.payload.id)
            state[index].quantity = action.payload.quantity
        }
    },
})
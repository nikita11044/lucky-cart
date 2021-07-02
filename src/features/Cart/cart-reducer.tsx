import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProductDomainType} from "../../api/types";
import {cartAPI} from "../../api/shop-api";

const addProductToCart = createAsyncThunk<{ product: ProductDomainType } | undefined, { product: ProductDomainType }>('cart/addProductToCart', async (arg, thunkAPI) => {
    try {
        await cartAPI.addProductToCart(arg.product)
        return {product: arg.product}
    } catch (e) {
        thunkAPI.rejectWithValue('Some error occurred')
    }
})

export const asyncActions = {
    addProductToCart
}

export const slice = createSlice({
    name: 'cart',
    initialState: [] as ProductDomainType[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(addProductToCart.fulfilled, (state, action) => {
            if (action.payload) state.unshift(action.payload.product)
        })
    }
})
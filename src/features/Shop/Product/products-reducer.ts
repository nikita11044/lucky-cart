import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProductDomainType, ProductType} from "../../../api/types";
import {productsAPI} from "../../../api/shop-api";
import {ThunkError} from "../../../utils/types";

const fetchProducts = createAsyncThunk<{ products: ProductDomainType[] }, undefined, ThunkError>('products/fetchProducts', async (arg, thunkAPI) => {
    try {
        const products = [] as ProductDomainType[]
        const querySnapshot = await productsAPI.getProducts()
        if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
                const productData = doc.data() as ProductType
                products.push({
                    id: doc.id,
                    ...productData
                })
            })
            return {products: products}
        } else {
            return thunkAPI.rejectWithValue('No products found')
        }
    } catch (e) {
        return thunkAPI.rejectWithValue('Some error occurred')
    }
})

export const asyncActions = {
    fetchProducts
}

export const slice = createSlice({
    name: 'products',
    initialState: [] as ProductDomainType[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload.products.map((el) => ({...el}))
        })
    }
})
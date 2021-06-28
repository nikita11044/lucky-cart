import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ProductDomainType, ProductType} from "../../api/types";
import {productsAPI} from "../../api/shop-api";

export const fetchProducts = createAsyncThunk<{ products: ProductDomainType[] } | undefined>('products/fetchProducts', async () => {
    try {
        const products = [] as ProductDomainType[]
        const querySnapshot = await productsAPI.getProducts()
        querySnapshot.forEach(doc => {
            const productData = doc.data() as ProductType
            products.push({
                id: doc.id,
                ...productData
            })
        })
        return {products: products}
    } catch (e) {
        console.log(e)
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
            return action.payload?.products.map((el) => ({...el}))
        })
    }
})
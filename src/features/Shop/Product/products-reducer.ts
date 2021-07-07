import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IProductInStore, IProductType} from "../../../api/types";
import {productsAPI} from "../../../api/shop-api";
import {ThunkError} from "../../../utils/types";

const fetchProducts = createAsyncThunk<{ products: IProductInStore[] }, undefined, ThunkError>('products/fetchProducts', async (arg, thunkAPI) => {
    try {
        const products = [] as IProductInStore[]
        const querySnapshot = await productsAPI.getProducts()
        if (!querySnapshot.empty) {
            querySnapshot.forEach(doc => {
                const productData = doc.data() as IProductType
                const product: IProductInStore = {...productData, id: doc.id}
                if (product.discount) product.priceWithDiscount = +(product.price * product.discount).toFixed(2)
                products.push(product)
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
    initialState: [] as IProductInStore[],
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            return action.payload.products.map((el) => ({...el}))
        })
    }
})
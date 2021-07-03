import {combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import {productsReducer} from "../features/Shop";
import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "../features/Cart";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

//@ts-ignore
window.store = store
import {combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import {productsReducer} from "../features/Shop";
import {configureStore} from "@reduxjs/toolkit";
import {cartReducer} from "../features/Cart";
import {AppRootStateType} from "../utils/types";
import {loadState, saveState} from "../utils/store-utils";
import {appReducer} from "../features/Application";

export const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
    app: appReducer
})

const persistedState: AppRootStateType = loadState()

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

store.subscribe(() => {
    saveState({
        products: store.getState().products,
        cart: store.getState().cart,
        app: store.getState().app
    })
})

//@ts-ignore
window.store = store
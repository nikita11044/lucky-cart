import {combineReducers} from "redux";
import {productsReducer} from "../../features/Shop";
import {cartReducer} from "../../features/Cart";
import {AppRootStateType} from "../../utils/types";
import {configureStore} from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

const initialGlobalState: AppRootStateType = {
    cart: {
        cart: [
            {
                id: 'xZZfzoTamQvHRk8voEsg',
                quantity: 5,
                imageURL: 'https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/3036536.50556__Cerberus_XXL.1920x1014.png?alt=media&token=59bf794b-0060-4d77-914f-269308f0d6a9',
                description: 'The burning spirit of victory',
                price: 5.5,
                discount: 0.41,
                title: 'Defender Cerberus mousemat',
                quantityInCart: 1
            },
            {
                id: 'bx2vNPaNJbB0YIkmONhB',
                quantity: 10,
                imageURL: 'https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/5142511.64500__Scrapper_500.1920x1014.png?alt=media&token=ced87756-1df5-42e7-b4c3-a9b468538b0c',
                description: 'Enjoy perfect sound',
                price: 25,
                discount: 0,
                title: 'Defender Scrapper 500 headphones',
                quantityInCart: 3
            }
        ],
        totalPrice: 0
    },
    products: [
        {
            id: 'xZZfzoTamQvHRk8voEsg',
            quantity: 5,
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/3036536.50556__Cerberus_XXL.1920x1014.png?alt=media&token=59bf794b-0060-4d77-914f-269308f0d6a9',
            description: 'The burning spirit of victory',
            price: 5.5,
            discount: 0.41,
            title: 'Defender Cerberus mousemat'
        },
        {
            id: 'bx2vNPaNJbB0YIkmONhB',
            quantity: 10,
            imageURL: 'https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/5142511.64500__Scrapper_500.1920x1014.png?alt=media&token=ced87756-1df5-42e7-b4c3-a9b468538b0c',
            description: 'Enjoy perfect sound',
            price: 25,
            discount: 0,
            title: 'Defender Scrapper 500 headphones'
        }
    ]
}

export const storyBookStore = configureStore({
    reducer: rootReducer,
    preloadedState: initialGlobalState,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware)
})

export const ReduxStoryProviderDecorator = (storyFn: any) => <Provider store={storyBookStore}>{storyFn()}</Provider>
export const HashRouterDecorator = (storyFn: any) => <HashRouter>{storyFn()}</HashRouter>
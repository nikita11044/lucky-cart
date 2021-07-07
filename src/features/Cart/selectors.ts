import {AppRootStateType} from "../../utils/types";

const selectProductsInCart = (state: AppRootStateType) => state.cart.cart
const selectTotalPrice = (state: AppRootStateType): number => state.cart.totalPrice

export  {
    selectProductsInCart,
    selectTotalPrice
}
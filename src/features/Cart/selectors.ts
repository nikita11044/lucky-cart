import {AppRootStateType} from "../../utils/types";

const selectProductsInCart = (state: AppRootStateType) => state.cart

export  {
    selectProductsInCart
}
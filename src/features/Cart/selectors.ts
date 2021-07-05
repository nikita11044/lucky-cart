import {AppRootStateType} from "../../utils/types";
import {IProductInCart} from "../../api/types";

const selectProductsInCart = (state: AppRootStateType): IProductInCart[] => state.cart.cart
const selectTotalPrice = (state: AppRootStateType): number => state.cart.totalPrice

export  {
    selectProductsInCart,
    selectTotalPrice
}
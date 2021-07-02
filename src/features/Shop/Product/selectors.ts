import {AppRootStateType} from "../../../utils/types";

const selectAllProducts = (state: AppRootStateType) => state.products

export {
    selectAllProducts
}
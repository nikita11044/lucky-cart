import {AppRootStateType} from "../../../utils/types";
import {IProductInStore} from "../../../api/types";

export const selectAllProducts = (state: AppRootStateType): IProductInStore[] => state.products
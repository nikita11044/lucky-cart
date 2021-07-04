import {db} from "../app/base";
import {IProductInStore} from "./types";

export const productsAPI = {
    getProducts() {
        const promise = db.collection('products').get()
        return promise
    }
}

export const ordersAPI = {
    createOrder(products: IProductInStore[]) {
        const promise = db.collection('orders').doc().set(products)
        return promise
    }
}
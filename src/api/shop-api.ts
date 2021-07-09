import {db} from "../app/base";
import {IProductInStore, OrderInfoType} from "./types";

export const productsAPI = {
    getProducts() {
        const promise = db.collection('products').get()
        return promise
    }
}

export const ordersAPI = {
    createOrder(orderInfo: OrderInfoType) {
        const promise = db.collection('orders').doc().set(orderInfo)
        return promise
    }
}
import {db} from "../app/base";
import {ProductDomainType} from "./types";

export const productsAPI = {
    getProducts() {
        const promise = db.collection('products').get()
        return promise
    }
}

export const ordersAPI = {
    createOrder(products: ProductDomainType[]) {
        const promise = db.collection('orders').doc().set(products)
        return promise
    }
}
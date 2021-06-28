import {db} from "../app/base";
import {ProductType} from "./types";

export const productsAPI = {
    getProducts() {
        const promise = db.collection('products').get()
        return promise
    }
}

export const ordersAPI = {
    createOrder(products: ProductType[]) {
        const promise = db.collection('orders').add({
            productsOrdered: products
        })
        return promise
   }
}
import {db} from "../app/base";
import {ProductDomainType} from "./types";

export const productsAPI = {
    getProducts() {
        const promise = db.collection('products').get()
        return promise
    }
}

export const cartAPI = {
    addProductToCart(product: ProductDomainType) {
        const {id, title, price, discount, description, imageURL, quantity} = product
        const promise = db.collection('cart').doc(id).set({
            title, price, discount, description, imageURL, quantity
        })
        return promise
    }
}
import {ProductDomainType} from "../../api/types";
import {cartActions, cartReducer} from "./index";

let startState: ProductDomainType[] = []

test('selected products should be added to cart', () => {
    const product = {id: '1', discount: 0.41, title: 'product 1', price: 200, quantity: 3, description: 'description 1', imageURL: 'img1'}

    const endState = cartReducer(startState, cartActions.addProductToCart.fulfilled({product: product}, 'requestId', {product: product}))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe('1')
})
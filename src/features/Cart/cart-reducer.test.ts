import {ProductDomainType} from "../../api/types";
import {cartActions, cartReducer} from "./index";

let startState: ProductDomainType[] = []

beforeEach(() => {
    startState = [
        {id: '1', discount: 0.41, title: 'product 1', price: 200, quantity: 3, description: 'description 1', imageURL: 'img1'}
    ]
})

test('selected product should be added to cart', () => {
    const product = {id: '2', discount: 0, title: 'product 2', price: 300, quantity: 2, description: 'description 2', imageURL: 'img2'}

    const endState = cartReducer(startState, cartActions.addProductToCart({product: product}))

    expect(endState.length).toBe(2)
    expect(endState[1].id).toBe('2')
})

test('selected product should be remove from cart', () => {
    const endState = cartReducer(startState, cartActions.removeProductFromCart({id: '1'}))

    expect(endState.length).toBe(0)
})

test('quantity of product in cart should be changed correctly', () => {
    const endState = cartReducer(startState, cartActions.changeProductQuantity({id: '1', quantity: 1}))

    expect(endState[0].quantity).toBe(1)
})
import {IProductInStore} from "../../../api/types";
import {productsActions, productsReducer} from "../index";

let startState: IProductInStore[] = []

test('fetched products should be added in state', () => {
    const fetchedProducts = [
        {id: '1', discount: 0.41, title: 'product 1', price: 200, quantity: 3, description: 'description 1', imageURL: 'img1'},
        {id: '2', discount: 0, title: 'product 2', price: 100, quantity: 1, description: 'description 2', imageURL: 'img2'}
    ]
    const endState = productsReducer(startState, productsActions.fetchProducts.fulfilled({products: fetchedProducts}, 'requestId', undefined))

    expect(endState.length).toBe(2)
    expect(endState[0].id).toBe('1')
    expect(endState[1].id).toBe('2')
})
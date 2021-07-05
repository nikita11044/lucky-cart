import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {ProductInCart} from "../features/Cart/ProductInCart/ProductInCart";
import {HashRouterDecorator, ReduxStoryProviderDecorator} from "./decorators/ReduxStoreProvider";

export default {
    title: 'Cart Stories',
    component: ProductInCart,
    decorators: [ReduxStoryProviderDecorator, HashRouterDecorator],
} as ComponentMeta<typeof ProductInCart>

const Template: ComponentStory<typeof ProductInCart> = (args) => <ProductInCart {...args}/>;

export const ProductInCartDemo = Template.bind({})

ProductInCartDemo.args = {
    product: {
        id: 'GJMrXVFa26yOBODobxHc',
        description: 'Typing has never been so satisfying',
        quantity: 3,
        price: 26,
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/sven.jpg?alt=media&token=5304f08e-6078-4a34-b34a-cd7074d3bb3b',
        title: 'Sven KB-G8500 wired keyboard',
        discount: 0,
        quantityInCart: 1
    }
}
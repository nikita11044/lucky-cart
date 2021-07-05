import {Product} from "../features/Shop/Product/Product";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {HashRouterDecorator, ReduxStoryProviderDecorator} from "./decorators/ReduxStoreProvider";

export default {
    title: 'Shop Stories',
    component: Product,
    decorators: [ReduxStoryProviderDecorator, HashRouterDecorator],
} as ComponentMeta<typeof Product>

const Template: ComponentStory<typeof Product> = (args) => <Product {...args}/>;

export const ProductCardWithoutDiscountDemo = Template.bind({})

ProductCardWithoutDiscountDemo.args = {
    product: {
        id: 'GJMrXVFa26yOBODobxHc',
        description: 'Typing has never been so satisfying',
        quantity: 3,
        price: 26,
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/sven.jpg?alt=media&token=5304f08e-6078-4a34-b34a-cd7074d3bb3b',
        title: 'Sven KB-G8500 wired keyboard',
        discount: 0
    }
}

export const ProductCardWithDiscountDemo = Template.bind({})

ProductCardWithDiscountDemo.args = {
    product: {
        id: 'GJMrXVFa26yOBODobxHc',
        description: 'Typing has never been so satisfying',
        quantity: 3,
        price: 26,
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/sven.jpg?alt=media&token=5304f08e-6078-4a34-b34a-cd7074d3bb3b',
        title: 'Sven KB-G8500 wired keyboard',
        discount: 0.28
    }
}
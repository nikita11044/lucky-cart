import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";
import {ProductInCart} from "../features/Cart/ProductInCart/ProductInCart";

export default {
    title: 'Cart Stories',
    component: ProductInCart
} as ComponentMeta<typeof ProductInCart>

const Template: ComponentStory<typeof ProductInCart> = () => <ProductInCart/>;

export const ProductInCartDemo = Template.bind({})
import {Product} from "./Product";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Product Stories/Product Card',
    component: Product
} as ComponentMeta<typeof Product>

const Template: ComponentStory<typeof Product> = () => <Product/>;

export const ProductCardInShop = Template.bind({})
import {Product} from "../features/Shop/Product/Product";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Shop Stories',
    component: Product
} as ComponentMeta<typeof Product>

const Template: ComponentStory<typeof Product> = () => <Product/>;

export const ProductCardDemo = Template.bind({})
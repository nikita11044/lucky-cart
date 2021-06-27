import {ProductOrderCard} from "./ProductOrderCard";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Product Stories/Product Card',
    component: ProductOrderCard
} as ComponentMeta<typeof ProductOrderCard>

const Template: ComponentStory<typeof ProductOrderCard> = () => <ProductOrderCard/>;

export const ProductCardInOrder = Template.bind({})
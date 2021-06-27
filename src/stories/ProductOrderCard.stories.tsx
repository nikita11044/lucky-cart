import {ProductOrderCard} from "../features/Order/ProductOrderCard/ProductOrderCard";
import {ComponentMeta, ComponentStory} from "@storybook/react";
import React from "react";

export default {
    title: 'Order Stories',
    component: ProductOrderCard
} as ComponentMeta<typeof ProductOrderCard>

const Template: ComponentStory<typeof ProductOrderCard> = () => <ProductOrderCard/>;

export const ProductCardInOrder = Template.bind({})
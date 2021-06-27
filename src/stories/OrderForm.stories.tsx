import {OrderForm} from "./OrderForm";
import {ComponentMeta, ComponentStory} from "@storybook/react";

export default {
    title: 'Order Stories',
    component: OrderForm
} as ComponentMeta<typeof OrderForm>

const Template: ComponentStory<typeof OrderForm> = () => <OrderForm/>

export const OrderFormDemo = Template.bind({})
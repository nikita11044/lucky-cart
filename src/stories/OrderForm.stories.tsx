import {ComponentMeta, ComponentStory} from "@storybook/react";
import {OrderForm} from "../features/Cart/OrderForm/OrderForm";

export default {
    title: 'Cart Stories',
    component: OrderForm
} as ComponentMeta<typeof OrderForm>

const Template: ComponentStory<typeof OrderForm> = () => <OrderForm/>

export const OrderFormDemo = Template.bind({})
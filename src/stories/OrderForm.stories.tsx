import {ComponentMeta, ComponentStory} from "@storybook/react";
import {OrderForm} from "../features/Cart/OrderForm/OrderForm";

export default {
    title: 'Cart Stories',
    component: OrderForm
} as ComponentMeta<typeof OrderForm>

const Template: ComponentStory<typeof OrderForm> = (args) => <OrderForm {...args}/>

export const OrderFormDemo = Template.bind({})
OrderFormDemo.args = {
    products: [
        {
            description: "Listen to the vibes of enjoyment",
            id: "2pYYtFEgik3eSVNBGuQL",
            imageURL: "https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/JET.A-GHP-180-3939312254.jpg?alt=media&token=af4a28e4-b610-49e4-85f5-28812cb60801",
            price: 25,
            quantity: 3,
            quantityInCart: 1,
            title: "JETACCESS GHP-180 headphones"
        },
        {
            description: "Light, smooth, ergonomic",
            discount: 0.42,
            id: "3broT41HFLMTGvcKQ6qg",
            imageURL: "https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/5173261.52110__Shock_GM-110L.1920x1014.png?alt=media&token=13af072f-6839-45da-ada6-30fbd4647ce5",
            price: 8,
            priceWithDiscount: 3.36,
            quantity: 12,
            quantityInCart: 1,
            title: "Defender Shock mouse"
        }
    ]
}
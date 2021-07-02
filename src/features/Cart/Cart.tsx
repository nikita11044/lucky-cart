import React from "react";
import {Grid} from "@material-ui/core";
import {ProductInCart} from "./ProductInCart/ProductInCart";
import {OrderForm} from "./OrderForm/OrderForm";

export const Cart: React.FC = () => {
    return <Grid container direction={'row'} style={ {marginTop: 30} } justify="space-between" alignItems="center" wrap={'nowrap'}>
        <Grid item container spacing={2} direction="column" >
            <Grid item>
                <ProductInCart/>
            </Grid>
            <Grid item>
                <ProductInCart/>
            </Grid>
            <Grid item>
                <ProductInCart/>
            </Grid>
        </Grid>
        <Grid item wrap={'nowrap'}>
            <OrderForm/>
        </Grid>
    </Grid>
}
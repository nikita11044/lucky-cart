import React from "react";
import {Grid} from "@material-ui/core";
import {ProductOrderCard} from "./ProductOrderCard/ProductOrderCard";
import {OrderForm} from "./OrderForm/OrderForm";

export const Order: React.FC = () => {
    return <Grid container direction={'row'} style={ {marginTop: 30} } justify="space-between" alignItems="center" wrap={'nowrap'}>
        <Grid item container spacing={2} direction="column" >
            <Grid item>
                <ProductOrderCard/>
            </Grid>
            <Grid item>
                <ProductOrderCard/>
            </Grid>
            <Grid item>
                <ProductOrderCard/>
            </Grid>
        </Grid>
        <Grid item wrap={'nowrap'}>
            <OrderForm/>
        </Grid>
    </Grid>
}
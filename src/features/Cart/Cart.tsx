import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {ProductInCart} from "./ProductInCart/ProductInCart";
import {OrderForm} from "./OrderForm/OrderForm";
import {useSelector} from "react-redux";
import {cartSelectors} from "./index";

export const Cart: React.FC = () => {
    const productsInCart = useSelector(cartSelectors.selectProductsInCart)
    const totalPrice = useSelector(cartSelectors.selectTotalPrice)

    return <Grid container direction={'row'} style={{marginTop: 30}} justify="space-between" alignItems="center"
                 wrap={'nowrap'}>
        <Grid item container spacing={2} direction="column">
            {
                productsInCart.length !== 0
                    ? productsInCart.map(pr => {
                        return <Grid key={pr.id} item>
                            <ProductInCart product={pr}/>
                        </Grid>
                    })
                    : <Typography style={ {textAlign: 'center'} }>
                        Your cart is empty
                    </Typography>
            }
            {
                productsInCart.length > 0 &&
                <Typography style={ {margin: '10px'} } display={'block'} variant={'h6'}>
                    Total: {'$' + totalPrice}
                </Typography>
            }
        </Grid>
        <Grid item wrap={'nowrap'}>
            <OrderForm products={productsInCart}/>
        </Grid>
    </Grid>
}
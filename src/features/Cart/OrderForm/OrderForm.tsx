import React from "react";
import {Button, FormControl, FormGroup, Grid, TextField} from "@material-ui/core";
import {useFormik} from "formik";
import {IProductInCart} from "../../../api/types";
import {ordersAPI} from "../../../api/shop-api";

type OrderFormPropsType = {
    products: IProductInCart[]
}

type OrderFormValuesType = {
    name: string,
    surname: string,
    address: string,
    phone: string,
}

export const OrderForm = React.memo(({products}: OrderFormPropsType) => {

    const formik = useFormik({
        initialValues: {
            name: '',
            surname: '',
            address: '',
            phone: '',
        },
        onSubmit: async (values: OrderFormValuesType) => {
            const res = await ordersAPI.createOrder({
                ...values,
                products
            })
        }
    })

    return <Grid container justify={'center'} style={ {minWidth: 500} }>
        <Grid item xs={6} style={ {width: '100%'} }>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField label={'Name'} margin={'normal'} {...formik.getFieldProps('name')}/>
                        <TextField label={'Surname'} margin={'normal'} {...formik.getFieldProps('surname')}/>
                        <TextField label={'Address'} margin={'normal'} {...formik.getFieldProps('address')}/>
                        <TextField label={'Phone'} type={'tel'} margin={'normal'} {...formik.getFieldProps('phone')}/>
                        <Button type={'submit'} variant={'contained'} color={'secondary'}>Order</Button>
                    </FormGroup>
                </FormControl>
            </form>
        </Grid>
    </Grid>
})
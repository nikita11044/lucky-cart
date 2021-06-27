import {Button, FormGroup, Grid, TextField} from "@material-ui/core";

export const OrderForm: React.FC = () => {
    return <Grid container justify={'center'}>
        <Grid item xs={4}>
            <form>
                <FormGroup>
                    <TextField label={'Name'} margin={'normal'}/>
                    <TextField label={'Surname'} margin={'normal'}/>
                    <TextField label={'Address'} margin={'normal'}/>
                    <TextField label={'Phone'} type={'tel'} margin={'normal'}/>
                    <Button type={'submit'} variant={'contained'} color={'secondary'}>Order</Button>
                </FormGroup>
            </form>
        </Grid>
    </Grid>
}
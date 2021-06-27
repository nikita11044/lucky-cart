import {Grid} from "@material-ui/core";
import {Product} from "./Product/Product";

export const Shop: React.FC = () => {
    return <Grid container spacing={2} style={ {marginTop: 30} }>
        <Grid item>
            <Product/>
        </Grid>
        <Grid item>
            <Product/>
        </Grid>
        <Grid item>
            <Product/>
        </Grid>
        <Grid item>
            <Product/>
        </Grid>
        <Grid item>
            <Product/>
        </Grid>
        <Grid item>
            <Product/>
        </Grid>
    </Grid>
}
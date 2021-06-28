import {Grid} from "@material-ui/core";
import {Product} from "./Product/Product";
import {useEffect} from "react";
import {useActions} from "../../utils/redux-utils";
import {productsActions} from "./index";
import {useSelector} from "react-redux";
import {selectProducts} from "./selectors";

export const Shop: React.FC = () => {

    const products = useSelector(selectProducts)

    const {fetchProducts} = useActions(productsActions)

    useEffect(() => {
        fetchProducts()
    }, [])

    return <Grid container spacing={2} style={{marginTop: 30}}>
        {
            products.map(pr => {
                return <Grid item key={pr.id}>
                    <Product product={pr}/>
                </Grid>
            })
        }
    </Grid>
}
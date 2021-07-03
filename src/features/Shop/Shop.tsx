import {Grid} from "@material-ui/core";
import {useEffect} from "react";
import {useActions} from "../../utils/redux-utils";
import {useSelector} from "react-redux";
import {productsActions} from "./index";
import {Product, productsSelectors} from "./Product/index";

export const Shop: React.FC = () => {

    const products = useSelector(productsSelectors.selectAllProducts)

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
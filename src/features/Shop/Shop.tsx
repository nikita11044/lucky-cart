import {Grid} from "@material-ui/core";
import {useEffect} from "react";
import {useActions} from "../../utils/redux-utils";
import {selectAllProducts} from "./Product/selectors";
import {useSelector} from "react-redux";
import {productsActions} from "./index";
import {Product} from "./Product/index";

export const Shop: React.FC = () => {

    const products = useSelector(selectAllProducts)

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
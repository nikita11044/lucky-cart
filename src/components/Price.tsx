import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

type PricePropsType = {
    price: number,
    priceWithDiscount?: number
}

const useStyles = makeStyles({
    price: {
        fontWeight: "bold"
    },
    formerPrice: {
        display: 'inline-block',
        // fontSize: 20,
        // fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '0.4em',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: '50%',
            width: '100%',
            height: 1,
            display: 'block',
            background: '#f91155',
            transform: 'rotate(-3deg)'
        }
    }
});

export const Price = React.memo(({price, priceWithDiscount}: PricePropsType) => {
    const classes = useStyles()

    console.log(priceWithDiscount)

    return <>
        {
            priceWithDiscount
            && <div style={ {display: "flex", gap: '5px'} }>
                <Typography className={classes.price}>{'$' + priceWithDiscount}</Typography>
                <Typography className={classes.formerPrice} component={'h4'}>{'$' + price }</Typography>
            </div>
            || <Typography className={classes.price}>{'$' + price}</Typography>
        }
    </>
})
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import React, {useCallback} from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {IProductInCart} from "../../../api/types";
import {useActions} from "../../../utils/redux-utils";
import {cartActions} from "../index";
import {Price} from "../../../components/Price";

const useStyles = makeStyles({
    root: {
        minWidth: 360,
        maxWidth: 1024,
        maxHeight: 130,
        margin: 'auto',
        borderRadius: 0,
        display: 'flex'
    },
    media: {
        width: '20%',
        height: 130,
        backgroundColor: 'rgba(0,0,0,0.04)',
        backgroundPosition: 'center center',
        backgroundSize: 'cover'
    },
    content: {
        padding: 24,
    },
    contentInnerWrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
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
    },
    description: {
        margin: 10,
        fontSize: 16,
        fontStyle: "italic",
        color: 'rgba(0,0,0,0.72)',
    },
    shadow: {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:hover': {
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
            transform: 'scale(1.04)',
        }
    },
    cardActions: {
        justifySelf: 'end',
        display: 'flex',
        gap: 10},
    cta: {
        textTransform: "initial"
    }
});

type PropsType = {
    product: IProductInCart
}

export const ProductInCart = React.memo(function ({product}: PropsType) {
    const classes = useStyles()

    const {changeProductQuantityInCart, removeProductFromCart} = useActions(cartActions)

    const {
        id,
        description,
        quantity,
        quantityInCart,
        price,
        priceWithDiscount,
        imageURL,
        title
    } = product

    const changeProductQuantityCallback = useCallback((e) => {
        if (e.currentTarget.dataset.math) {
            const trigger: string = e.currentTarget.dataset.math
            if (trigger === '+') {
                const newQuantity = quantityInCart + 1
                if (newQuantity <= quantity) changeProductQuantityInCart({id: id, quantityInCart: newQuantity})

            } else {
                if (trigger === '-') {
                    const newQuantity = quantityInCart - 1
                    if (newQuantity > 0) {
                        changeProductQuantityInCart({id: id, quantityInCart: newQuantity})
                    } else {
                        removeProductFromCart({id: id})
                    }
                }
            }
        }
    }, [quantityInCart])

    return (
        <Card className={classes.root + ' ' + classes.shadow}>
            <CardMedia
                className={classes.media}
                image={imageURL}
            />
            <div className={classes.contentInnerWrapper}>
                <CardContent className={classes.content}>
                    {/*<Price price={price} priceWithDiscount={priceWithDiscount}/>*/}
                    {
                        priceWithDiscount && <Price price={priceWithDiscount}/>
                    }
                    <Typography component={'h5'}>{title}</Typography>
                </CardContent>
                <Typography className={classes.description}>{description}</Typography>
                <CardActions className={classes.cardActions}>
                    <IconButton color="primary" className={classes.cta} data-math={'-'} onClick={(e) => changeProductQuantityCallback(e)}>
                        <RemoveIcon/>
                    </IconButton>
                    {quantityInCart}
                    <IconButton color="primary" className={classes.cta} data-math={'+'} onClick={(e) => changeProductQuantityCallback(e)}>
                        <AddIcon/>
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );
})
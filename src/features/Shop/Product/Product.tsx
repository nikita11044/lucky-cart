import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Badge} from "@material-ui/core";
import {IProductInStore} from "../../../api/types";
import {useActions} from "../../../utils/redux-utils";
import {cartActions} from "../../Cart";
import {Price} from "../../../components/Price";

const useStyles = makeStyles({
    root: {
        minWidth: 320,
        minHeight: 351,
        margin: 'auto',
        borderRadius: 0,
    },
    media: {
        width: '100%',
        height: 0,
        paddingBottom: '56.25%',
        backgroundColor: 'rgba(0,0,0,0.04)',
    },
    content: {
        padding: '24px 24px 0 24px',
        position: 'relative'
    },
    discount: {
        position: 'absolute',
        left: '10%'
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
    title: {
      textAlign: "center"
    },
    description: {
        margin: 10,
        fontSize: 14,
        fontStyle: "italic",
        textAlign: "center",
        color: 'rgba(0,0,0,0.72)',
    },
    shadow: {
        transition: '0.3s cubic-bezier(.47,1.64,.41,.8)',
        '&:hover': {
            boxShadow: '0 4px 20px 0 rgba(0,0,0,0.12)',
            transform: 'scale(1.04)',
        }
    },
    cta: {
        textTransform: "initial"
    }
});

type PropsType = {
   product: IProductInStore
}

export const Product = React.memo(function ({product}: PropsType) {
    const classes = useStyles();

    const {addProductToCart} = useActions(cartActions)

    const {
        description,
        price,
        discount,
        imageURL,
        title
    } = product

    return (
        <Card className={classes.root + ' ' + classes.shadow}>
            <CardMedia
                className={classes.media}
                image={imageURL}
            />
            <CardContent className={classes.content}>
                {
                    discount !== 0
                    && <Badge className={classes.discount} badgeContent={`-${Math.round(discount * 100)}%`} color={'primary'}/>
                }
                <div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center'} }>
                    <Price price={price} discount={discount}/>
                    <Typography className={classes.title} component={'h5'}>
                        {title}
                    </Typography>
                    <Typography className={classes.description}>
                        {description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button color="primary" fullWidth className={classes.cta} onClick={() => addProductToCart({product: {...product, quantityInCart: 1}})}>
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
})


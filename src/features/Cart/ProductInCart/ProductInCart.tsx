import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {ProductDomainType} from "../../../api/types";

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
    product: ProductDomainType
}

export const ProductInCart = React.memo(function ({product}: PropsType) {
    const classes = useStyles()

    const {
        imageURL,
        description,
        price,
        quantity,
        title,
        discount,
        id
    } = product

    return (
        <Card className={classes.root + ' ' + classes.shadow}>
            <CardMedia
                className={classes.media}
                image="https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/3036536.50556__Cerberus_XXL.1920x1014.png?alt=media&token=59bf794b-0060-4d77-914f-269308f0d6a9"
            />
            <div className={classes.contentInnerWrapper}>
                <CardContent className={classes.content}>
                    <Typography className={classes.price} component={'h4'}>$5.5</Typography>
                    <Typography component={'h5'}>Defender Cerberus mousemat</Typography>
                </CardContent>
                <Typography className={classes.description}>The burning spirit of victory</Typography>
                <CardActions className={classes.cardActions}>
                    <IconButton color="primary" className={classes.cta}>
                        <RemoveIcon/>
                    </IconButton>
                    0
                    <IconButton color="primary" className={classes.cta}>
                        <AddIcon/>
                    </IconButton>
                </CardActions>
            </div>
        </Card>
    );
})
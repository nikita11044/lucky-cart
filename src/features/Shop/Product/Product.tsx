import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Badge} from "@material-ui/core";
import {ProductDomainType} from "../../../api/types";

const useStyles = makeStyles({
    root: {
        maxWidth: 304,
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
    },
    discount: {
        margin: '0 24px 24px 24px',
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
    cta: {
        textTransform: "initial"
    }
});

type PropsType = {
   product: ProductDomainType
}

export const Product = React.memo(function ({product}: PropsType) {
    const classes = useStyles();

    return (
        <Card className={classes.root + ' ' + classes.shadow}>
            <CardMedia
                className={classes.media}
                image={product.imageURL}
            />
            <CardContent className={classes.content}>
                <Badge className={classes.discount} badgeContent={'-30%'} color={'primary'}/>
                <div style={ {display: 'flex', flexDirection: 'column', alignItems: 'center'} }>
                    <Typography className={classes.price} component={'h4'}>$5.5</Typography>
                    <Typography component={'h5'}>
                        {product.title}
                    </Typography>
                    <Typography className={classes.description}>
                        {product.description}
                    </Typography>
                </div>
            </CardContent>
            <CardActions>
                <Button color="primary" fullWidth className={classes.cta}>
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
})


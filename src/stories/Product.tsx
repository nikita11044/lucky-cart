import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Badge} from "@material-ui/core";

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
        padding: 24,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    discount: {
        alignSelf: 'start'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: '0.4em',
    },
    body: {
        fontSize: 16,
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
        marginTop: 24,
        textTransform: "initial"
    }
});

export const Product: React.FC = () => {
    const classes = useStyles();

    return (
        <Card className={classes.root + ' ' + classes.shadow}>
            <CardMedia
                className={classes.media}
                image="https://firebasestorage.googleapis.com/v0/b/lucky-cart.appspot.com/o/3036536.50556__Cerberus_XXL.1920x1014.png?alt=media&token=59bf794b-0060-4d77-914f-269308f0d6a9"
            />
            <CardContent className={classes.content}>
                <Badge className={classes.discount} badgeContent={'-30%'} color={'primary'}/>
                <Typography className={classes.heading} component={'h4'}>Defender mousemat</Typography>
                <Typography className={classes.body}>Description</Typography>
            </CardContent>
            <CardActions>
                <Button color="primary" fullWidth className={classes.cta}>
                    Buy
                </Button>
            </CardActions>
        </Card>
    );
}


import React from 'react';
import './App.css';
import {AppBar, Badge, Container, IconButton, LinearProgress, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {NavLink, Route} from 'react-router-dom';
import {Cart, cartSelectors} from "../features/Cart";
import {Shop} from "../features/Shop";
import {useSelector} from "react-redux";
import {appSelectors} from "../features/Application";

function App() {

    const status = useSelector(appSelectors.selectStatus)
    const productsInCart = useSelector(cartSelectors.selectProductsInCart)

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Lucky Cart
                    </Typography>
                    <div style={ {flexGrow: 1} }/>
                    <NavLink to={'/cart'}>
                        <IconButton>
                            <Badge badgeContent={productsInCart.length} color={'secondary'}>
                                <ShoppingCartOutlined style={ {fill: 'white'} }/>
                            </Badge>
                        </IconButton>
                    </NavLink>
                </Toolbar>
                {status === 'loading' && <LinearProgress/>}
            </AppBar>
            <Container fixed>
                <Route exact path={'/'} render={() => <Shop/>}/>
                <Route exact path={'/cart'} render={() => <Cart/>}/>
            </Container>
        </div>
    );
}

export default App;

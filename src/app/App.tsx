import React from 'react';
import './App.css';
import {AppBar, Badge, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {NavLink, Route } from 'react-router-dom';
import {Shop} from "../features/Shop/Shop";
import {Order} from "../features/Order/Order";
import {productsAPI} from "../api/shop-api";

function App() {

    productsAPI.getProducts().then(querySnapshot => {
        console.log(querySnapshot)
        querySnapshot.forEach(doc => {
            console.log(doc)
            console.log(doc.id, ' => ', doc.data())
        })
    })

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Lucky Cart
                    </Typography>
                    <div style={ {flexGrow: 1} }/>
                    <NavLink to={'/order'}>
                        <IconButton>
                            <Badge badgeContent={3} color={'secondary'}>
                                <ShoppingCartOutlined style={ {fill: 'white'} }/>
                            </Badge>
                        </IconButton>
                    </NavLink>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Route exact path={'/'} render={() => <Shop/>}/>
                <Route exact path={'/order'} render={() => <Order/>}/>
            </Container>
        </div>
    );
}

export default App;

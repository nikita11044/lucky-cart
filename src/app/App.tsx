import React from 'react';
import './App.css';
import {AppBar, Badge, Container, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";
import {NavLink, Route} from 'react-router-dom';
import {Cart} from "../features/Cart";
import {Shop} from "../features/Shop";

function App() {

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
                            <Badge badgeContent={3} color={'secondary'}>
                                <ShoppingCartOutlined style={ {fill: 'white'} }/>
                            </Badge>
                        </IconButton>
                    </NavLink>
                </Toolbar>
            </AppBar>
            <Container fixed>
                <Route exact path={'/'} render={() => <Shop/>}/>
                <Route exact path={'/cart'} render={() => <Cart/>}/>
            </Container>
        </div>
    );
}

export default App;

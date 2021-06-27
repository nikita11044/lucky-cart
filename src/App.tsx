import React from 'react';
import './App.css';
import {AppBar, Badge, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingCartOutlined} from "@material-ui/icons";

function App() {

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Lucky Cart
                    </Typography>
                    <div style={ {flexGrow: 1} }/>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCartOutlined/>
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default App;

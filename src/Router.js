import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homePage'
import cartPage from './pages/formPage'

const Router = () => (
    <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/cart' component={cartPage}/>
    </Switch>
);

export default Router;
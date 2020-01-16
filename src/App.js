import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login'
import Layout from './components/Layout/Layout';
import classes from './App.css'
import HomePage from './pages/homePage'
import cartPage from './pages/formPage'

class App extends Component {
  render() {
    let routes = <div className={classes.LoginPage}>
                    <Route exact path='/login' component={Login}/>
                  </div>
    if(this.props.token || localStorage.getItem('token')){
      routes = 
        <div className={classes.layout}>
          <Layout></Layout>
          <main className={classes.layout__content}>
          <Switch>
            <Route exact path='/home' component={HomePage}/>
            <Route exact path='/cart' component={cartPage}/>
        </Switch>
            </main>
        </div>
    }
    return (
     routes
    );
  }
}
  const mapStateToProps = (state) => {
    return {
      token: state.token
    }
  }

export default withRouter(connect(null, mapStateToProps)(App));

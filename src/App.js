import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Router from './Router';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    if(localStorage.getItem('token')){
      return (
        <div className='layout'>
          <Layout></Layout>
          <main className='layout__content'>
              <Router></Router>
            </main>
        </div>
      );
      }
    else {
      return <div className='LoginPage'>
        <Route exact path='/' component={Login}/>
      </div>
    }
  }
}

export default App;

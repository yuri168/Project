import React, { Component } from 'react';
import Body from './komponen/body.js';
import { Route } from 'react-router-dom';
import Product from './komponen/product.js';
import Cart from './komponen/cart.js'
import Login from './komponen/login.js';
import signIn from './komponen/from.js';
import Myprofile from './komponen/myprofile.js';
import detailInv from './komponen/detailinv.js';
import search from './komponen/search.js';
// redux ----
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; //tambahan
import reducers from './reducers';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk)); // tambahan
    return (
      <Provider store ={store}>
      <div>
        <Route exact path="/" component={Body}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Product" component={Product}/>
        <Route path="/Cart" component={Cart}/>
        <Route path="/SignIn" component={signIn}/>
        <Route path="/MyProfile" component={Myprofile}/>
        <Route path="/Detail" component={detailInv}/>
        <Route path="/search" component={search}/>
      </div>
      </ Provider>
    );
  }
}


export default App;
import React, { Component } from 'react';
import Body from './komponen/body.js';


import { Route } from 'react-router-dom';
import Productcontent from './komponen/productcontent.js'

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Body}/>
        <Route path="/Productcontent" component={Productcontent}/>
      </div>
    );
  }
}


export default App;
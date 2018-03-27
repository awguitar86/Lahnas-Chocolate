import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/api/products' component={Products} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import LePetite from './Components/Products/LePetite/LePetite';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/lepetite' component={LePetite} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <div classNAme="App">
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;

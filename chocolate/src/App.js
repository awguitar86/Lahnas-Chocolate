import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import ShoppingBag from './Components/ShoppingBag/ShoppingBag';
import Checkout from './Components/Checkout/Checkout';
import OrderReview from './Components/OrderReview/OrderReview';
import Thanks from './Components/Thanks/Thanks';
import LePetite from './Components/Products/LePetite/LePetite';
import HalfPound from './Components/Products/HalfPound/HalfPound';
import OnePound from './Components/Products/OnePound/OnePound';
import TwoPound from './Components/Products/TwoPound/TwoPound';
import RockyRoad from './Components/Products/RockyRoad/RockyRoad';
import PretzelRod from './Components/Products/PretzelRod/PretzelRod';
import LahnaBar from './Components/Products/LahnaBar/LahnaBar';
import Lollipop from './Components/Products/Lollipop/Lollipop';
import Oreos from './Components/Products/Oreos/Oreos';
import Caramels from './Components/Products/Caramels/Caramels';
import Licorice from './Components/Products/Licorice/Licorice';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/products' component={Products} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/shoppingbag' component={ShoppingBag} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orderreview' component={OrderReview} />
        <Route path='/thanks' component={Thanks} />
        <Route path='/lepetite' component={LePetite} />
        <Route path='/halfpound' component={HalfPound} />
        <Route path='/onepound' component={OnePound} />
        <Route path='/twopound' component={TwoPound} />
        <Route path='/rockyroad' component={RockyRoad} />
        <Route path='/pretzelrod' component={PretzelRod} />
        <Route path='/lahnabar' component={LahnaBar} />
        <Route path='/lollipop' component={Lollipop} />
        <Route path='/oreos' component={Oreos} />
        <Route path='/caramels' component={Caramels} />
        <Route path='/licorice' component={Licorice} />

      </div>
    );
  }
}

export default App;

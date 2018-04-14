import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { findUserInfo } from './services/account.services';
import { updateUser, updateOrder } from './actions/actionCreators';
import './App.css';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import Dashboard from './Components/Account/Dashboard/Dashboard';
import ChangeInfo from './Components/Account/ChangeInfo/ChangeInfo';
import OrderHistory from './Components/Account/OrderHistory/OrderHistory';
import SingleOrder from './Components/Account/SingleOrder/SingleOrder';

import ShoppingBag from './Components/ShoppingBag/ShoppingBag';
import Checkout from './Components/Checkout/Checkout';
import OrderReview from './Components/OrderReview/OrderReview';
import Thanks from './Components/Thanks/Thanks';

import Products from './Components/Products/Products';
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
  // constructor(props){
  //   super(props);
  // }

  componentWillMount(){
    findUserInfo(2)
      .then( res => {
        let newUserInfo = res.data[0];
        this.props.updateUser(newUserInfo);
      })
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />

        <Route path='/dashboard/:id' component={Dashboard} />
        <Route path='/changeinfo/:id' component={ChangeInfo} />
        <Route path='/orderhistory/:userid' component={OrderHistory} />
        <Route path='/singleorder/:userid/:orderid' component={SingleOrder} />

        <Route path='/shoppingbag' component={ShoppingBag} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/orderreview' component={OrderReview} />
        <Route path='/thanks' component={Thanks} />

        <Route path='/products' component={Products} />
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

function mapStateToProps(state){
  return state;
}

export default withRouter( connect( mapStateToProps, {updateUser, updateOrder} ) (App) );

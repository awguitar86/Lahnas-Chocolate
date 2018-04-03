import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './checkout.css';

class Checkout extends Component {
    render(){
        return(
            <div className='checkout-wrap'>
                <Header />
                <div className='checkout-body'>
                    <h1>Items in Your Bag</h1>
                    <div className='checkout-items'></div>
                    <Link to='/checkout'><button>CHECKOUT</button></Link>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Checkout;
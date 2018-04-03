import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './shoppingBag.css';

class ShoppingBag extends Component {
    render(){
        return(
            <div className='shopping-wrap'>
                <Header />
                <div className='shopping-body'>
                    <h1>Items in Your Bag</h1>
                    <div className='shopping-bag-items'>There are no items in your shopping bag</div>
                    <Link to='/checkout'><button>CHECKOUT</button></Link>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ShoppingBag;
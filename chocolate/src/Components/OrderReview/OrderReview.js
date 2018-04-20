import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './orderReview.css';
import { addToCart, updateCustomer, updateUser } from '../../actions/actionCreators';
import { connect } from 'react-redux';

class OrderReview extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }


    render(){
        return(
            <div className='or-wrap'>
                <Header />
                <div className='or-body'>
                    <h1>Order Review</h1>
                    <div className='or-customer-info'>
                        <div className='or-customer-left'>
                            <p>Timmothy Burn</p>
                            <p>Tim Burn Company</p>
                            <p>1234 Cool Ave.</p>
                            <p>Layton, UT 84041</p>
                        </div>
                        <div className='or-customer-right'>
                            <p>(801) 555-1234</p>
                            <p>timburn@gmail.com</p>
                            <p>Date: 03/27/2015</p>
                            <p>Shipping Method: Delivery</p>
                        </div>
                    </div>
                    <div className='or-items'>
                        <div className='or-item1'>
                            <h3>One Pound Box</h3>
                            <div className='or-price-qty'>
                                <p>$29.95</p>
                                <p>Qty: 1</p>
                                <p>$29.95</p>
                            </div>
                        </div>
                        <div className='or-item2'>
                            <h3>Rocky Road</h3>
                            <div className='or-price-qty'>
                                <p>$3.75</p>
                                <p>Qty: 2</p>
                                <p>$7.50</p>
                            </div>
                        </div>
                        <div className='or-item3'>
                            <h3>Pretzel Rod</h3>
                            <div className='or-price-qty'>
                                <p>$2.49</p>
                                <p>Qty: 4</p>
                                <p>$9.96</p>
                            </div>
                        </div>
                    </div>
                    <div className='or-price'>
                        <div className='or-price-subtotal'>
                            <div className='or-price-subtotal-text'>
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p>Tax 6.5%</p>
                            </div>
                            <div className='or-price-subtotal-numbers'>
                                <p>$47.41</p>
                                <p>$5.00</p>
                                <p>$3.08</p>
                            </div>
                        </div>
                        <div className='or-total'>
                            <ul className='or-total-payment'>
                                <li>Payment Method:</li>
                                <li>On Delivery</li>
                            </ul>
                            <ul className='or-total-price'>
                                <li>Total</li>
                                <li>$55.49</li>
                            </ul>
                        </div>
                    </div>
                    <div className='or-button'>
                        <Link to='/thanks'><button>SUBMIT ORDER</button></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart, updateCustomer, updateUser}) (OrderReview);
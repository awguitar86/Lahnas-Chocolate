import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './singleOrder.css';

class SingleOrder extends Component {
    render(){
        return(
            <div className='single-wrap'>
                <Header />
                <div className='single-body'>
                    <h1>Order 1234</h1>
                    <div className='single-customer-info'>
                        <div className='single-customer-left'>
                            <p>Timmothy Burn</p>
                            <p>Tim Burn Company</p>
                            <p>1234 Cool Ave.</p>
                            <p>Layton, UT 84041</p>
                        </div>
                        <div className='single-customer-right'>
                            <p>(801) 555-1234</p>
                            <p>timburn@gmail.com</p>
                            <p>Date: 03/27/2015</p>
                            <p>Shipping Method: Delivery</p>
                        </div>
                    </div>
                    <div className='single-items'>
                        <div className='single-item1'>
                            <h3>One Pound Box</h3>
                            <div className='single-price-qty'>
                                <p>$29.95</p>
                                <p>Qty: 1</p>
                                <p>$29.95</p>
                            </div>
                        </div>
                        <div className='single-item2'>
                            <h3>Rocky Road</h3>
                            <div className='single-price-qty'>
                                <p>$3.75</p>
                                <p>Qty: 2</p>
                                <p>$7.50</p>
                            </div>
                        </div>
                        <div className='single-item3'>
                            <h3>Pretzel Rod</h3>
                            <div className='single-price-qty'>
                                <p>$2.49</p>
                                <p>Qty: 4</p>
                                <p>$9.96</p>
                            </div>
                        </div>
                    </div>
                    <div className='single-price'>
                        <div className='single-price-subtotal'>
                            <div className='single-price-subtotal-text'>
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p>Tax 6.5%</p>
                            </div>
                            <div className='single-price-subtotal-numbers'>
                                <p>$47.41</p>
                                <p>$5.00</p>
                                <p>$3.08</p>
                            </div>
                        </div>
                        <div className='single-total'>
                            <ul className='single-total-payment'>
                                <li>Payment Method:</li>
                                <li>On Delivery</li>
                            </ul>
                            <ul className='single-total-price'>
                                <li>Total</li>
                                <li>$55.49</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default SingleOrder;
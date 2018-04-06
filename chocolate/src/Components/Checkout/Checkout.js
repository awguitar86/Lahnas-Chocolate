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
                    <h1>Contact & Shipping Info</h1>
                    <div className='checkout-form'>
                        <input className='checkout-first' placeholder='First Name' />
                        <input className='checkout-last' placeholder='Last Name'/>
                        <input className='checkout-company' placeholder='Company(optional)'/>
                        <input className='checkout-address' placeholder='Address'/>
                        <input className='checkout-city' placeholder='City'/>
                        <input className='checkout-state' placeholder='State' />
                        <input className='checkout-zip' placeholder='Zip Code'/>
                        <input className='checkout-phone' placeholder='Phone Number'/>
                        <input className='checkout-email' placeholder='Email'/>
                        <input className='checkout-reTypeEmail' placeholder='Re-Type Email'/>
                    </div>

                    <div className='payment-method'>
                        <p>Payment Method:</p>
                        <div className='payment-method-inputs'>
                            <input type='radio' name='payment'/>
                            <label for='paymentChoice1'>On Delivery</label>
                            <input type='radio' name='payment'/>
                            <label for='paymentChoice2'>Mail</label>
                            <input type='radio' name='payment'/>
                            <label for='paymentChoice3'>PayPal</label>
                        </div>
                    </div>
                    <div className='shipping-method'>
                        <p>Shipping Method:</p>
                        <div className='shipping-method-input'>
                            <input type='radio' name='shipping' value='' checked='checked'/>
                            <label for='shippingChoice1'>Delivery Only</label>
                        </div>
                    </div>

                    <div className='total-price'>
                        <div className='subtotal-shipping-tax'>
                            <div className='subtotal'>
                                <h3>Subtotal</h3>
                                <p>$0.00</p>
                            </div>
                            <div className='shipping'>
                                <h3>Shipping</h3>
                                <p>$0.00</p>
                            </div>
                            <div className='tax'>
                                <h3>Tax 6.5%</h3>
                                <p>$0.00</p>
                            </div>
                        </div>
                        <div className='price-divider'></div>
                        <div className='total'>
                            <h2>Total</h2>
                            <p>$0.00</p>
                        </div>
                    </div>
                    <div className='checkout-button'>
                        <Link to='/checkout'><button>REVIEW ORDER</button></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Checkout;
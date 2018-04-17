import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './checkout.css';
import { addToCart, updateCustomer } from '../../actions/actionCreators';
import { connect } from 'react-redux';

class Checkout extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            company: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            phone: '',
            email: '',
            paymentMthd: '',
            subtotal: 0,
            taxes: 0,
            total: 0
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleUpdateCustomer = this.handleUpdateCustomer.bind(this);
    }


    handleChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        this.setState({ [key]: newState })
        console.log(e.target.value);
    }

    handleUpdateCustomer(){
        this.props.updateCustomer(this.state);
      }


    render(){
        console.log(this.state);
        console.log(this.props.customerInfo);
        const shoppingItems = this.props.cartReducer.cart;
        let totalArr = [0];
        let bagSubTotal;
        shoppingItems.map( shoppingItem => {
            totalArr.push(Number((shoppingItem.product['price'] * shoppingItem.qty).toFixed(2)));
        })
        function totalSum(numbers){
            bagSubTotal = numbers.reduce((a,b) => {
                return a + b;
            }).toFixed(2)
        }
        totalSum(totalArr);
        let taxes = (bagSubTotal * 0.067).toFixed(2);
        let bagTotal = (Number(bagSubTotal) + Number(taxes)).toFixed(2);
        return(
            <div className='checkout-wrap'>
                <Header />
                <div className='checkout-body'>
                    <h1>Contact & Shipping Info</h1>
                    <div className='checkout-form'>
                        <input className='checkout-first' placeholder='First Name'  name='first_name' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-last' placeholder='Last Name' name='last_name' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-company' placeholder='Company(optional)' name='company' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-address' placeholder='Address' name='address' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-city' placeholder='City' name='city' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-state' placeholder='State'  name='state' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-zip' placeholder='Zip Code' name='zip_code' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-phone' placeholder='Phone Number' name='phone' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-email' placeholder='Email' name='email' onChange={ e => {this.handleChange(e) }}/>
                        <input className='checkout-reTypeEmail' placeholder='Re-Type Email'/>
                    </div>

                    <div className='payment-method'>
                        <p>Payment Method:</p>
                        <div className='payment-method-inputs'>
                            <input type='radio' name='paymentMthd' value='On Delivery' onChange={ e => {this.handleChange(e) }}/>
                            <label>On Delivery</label>
                            <input type='radio' name='paymentMthd' value='Mail' onChange={ e => {this.handleChange(e) }}/>
                            <label>Mail</label>
                        </div>
                    </div>
                    <div className='shipping-method'>
                        <p>Shipping Method:</p>
                        <div className='shipping-method-input'>
                            <label>Delivery Only</label>
                        </div>
                    </div>

                    <div className='total-price'>
                        <div className='subtotal-shipping-tax'>
                            <div className='subtotal'>
                                <h3>Subtotal</h3>
                                <p>${bagSubTotal}</p>
                            </div>
                            <div className='shipping'>
                                <h3>Shipping</h3>
                                <p>$0.00</p>
                            </div>
                            <div className='tax'>
                                <h3>Tax 6.7%</h3>
                                <p>${taxes}</p>
                            </div>
                        </div>
                        <div className='price-divider'></div>
                        <div className='total'>
                            <h2>Total</h2>
                            <p>${bagTotal}</p>
                        </div>
                    </div>
                    <div className='checkout-button'>
                        <Link to='orderreview' onClick={this.handleUpdateCustomer}><button>REVIEW ORDER</button></Link>
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

export default connect(mapStateToProps, {addToCart, updateCustomer}) (Checkout);
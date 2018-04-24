import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import OrderReviewItem from './OrderReviewItem/OrderReviewItem';
import { orderMailer } from '../../services/nodemailer.services';
import { getCartItems, deleteCartItems } from '../../services/cart.services';
import './orderReview.css';
import { addToCart, updateCustomer, updateUser, getCartItem } from '../../actions/actionCreators';
import { connect } from 'react-redux';

class OrderReview extends Component {
    constructor(props){
        super(props);
        this.state = {
            cart: [],
            first_name: '',
            last_name: '',
            company: '',
            address: '',
            city: '',
            usState: '',
            zip_code: '',
            phone: '',
            email: '',
            paymentType: '',
            date: '',
            subtotal: '',
            tax: '',
            total: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        let totalArr = [0];
        let bagSubTotal;
        if(this.props.userInfo.id){
            const userItems = this.props.cartItem;
            const displayOrderItems = userItems.map( userItem => {
                totalArr.push(Number((userItem.price * userItem.quantity).toFixed(2)));
            })
            function totalSum(numbers){
                bagSubTotal = numbers.reduce((a,b) => {
                    return a + b;
                }).toFixed(2)
            }
            totalSum(totalArr);
            let taxes = (bagSubTotal * 0.067).toFixed(2);
            let bagTotal = (Number(bagSubTotal) + Number(taxes)).toFixed(2);
            let today = moment().format('MMMM DD, YYYY');
            this.setState({
                cart: this.props.cartItem,
                first_name: this.props.userInfo.first_name,
                last_name: this.props.userInfo.last_name,
                company: this.props.userInfo.company,
                address: this.props.userInfo.address,
                city: this.props.userInfo.city,
                usState: this.props.userInfo.state,
                zip_code: this.props.userInfo.zip_code,
                phone: this.props.userInfo.phone,
                email: this.props.userInfo.email,
                paymentType: this.props.userInfo.paymentMthd,
                date: today,
                subtotal: bagSubTotal,
                tax: taxes,
                total: bagTotal
            })
        }
        else {
            const reviewItems = this.props.cartReducer.cart;
            const displayOrderItems = reviewItems.map( reviewItem => {
                totalArr.push(Number((reviewItem.price * reviewItem.quantity).toFixed(2)));
            })
            function totalSum(numbers){
                bagSubTotal = numbers.reduce((a,b) => {
                    return a + b;
                }).toFixed(2)
            }
            totalSum(totalArr);
            let taxes = (bagSubTotal * 0.067).toFixed(2);
            let bagTotal = (Number(bagSubTotal) + Number(taxes)).toFixed(2);
            let today = moment().format('MMMM DD, YYYY');
            this.setState({
                cart: this.props.customerInfo.cart,
                first_name: this.props.customerInfo.first_name,
                last_name: this.props.customerInfo.last_name,
                company: this.props.customerInfo.company,
                address: this.props.customerInfo.address,
                city: this.props.customerInfo.city,
                usState: this.props.customerInfo.state,
                zip_code: this.props.customerInfo.zip_code,
                phone: this.props.customerInfo.phone,
                email: this.props.customerInfo.email,
                paymentType: this.props.customerInfo.paymentMthd,
                date: today,
                subtotal: bagSubTotal,
                tax: taxes,
                total: bagTotal
            })
        }
    }

    handleSubmit(){
        console.log('register button fired!')
        console.log(this.state);
        const { first_name, last_name, company, address, city, usState, zip_code, phone, email, paymentType, date, subtotal, tax, total } = this.state;
        const reqBody = { first_name, last_name, company, address, city, usState, zip_code, phone, email, paymentType, date, subtotal, tax, total };
        orderMailer(reqBody)
            .then( res => res.data )
            .catch( err => {throw err});
    }


    render(){
        console.log(this.state);
        console.log(this.props.customerInfo);
        console.log(this.props.cartItem);
        const orderCartItems = this.state.cart;
        console.log(orderCartItems);
        const displayOrderItems = orderCartItems.map( orderCartItem => {
            const index = orderCartItems.indexOf(orderCartItem);
            return ( <OrderReviewItem
                        key={`orderItem${index}`}
                        index={index}
                        productid={orderCartItem.id}
                        productName={orderCartItem.name}
                        price={orderCartItem.price}
                        qty={orderCartItem.quantity}
            />)
        })
        return(
            <div className='or-wrap'>
                <Header />
                <div className='or-body'>
                    <h1>Order Review</h1>
                    <div className='or-customer-info'>
                        <div className='or-customer-left'>
                            <p>{this.state.first_name} {this.state.last_name}</p>
                            <p>{this.state.company}</p>
                            <p>{this.state.address}</p>
                            <p>{this.state.city}, {this.state.usState} {this.state.zip_code}</p>
                        </div>
                        <div className='or-customer-right'>
                            <p>{this.state.phone}</p>
                            <p>{this.state.email}</p>
                            <p>Date: {this.state.date}</p>
                            <p>Shipping Method: Delivery</p>
                        </div>
                    </div>
                    <div className='or-items'>
                    {displayOrderItems}
                    </div>
                    <div className='or-price'>
                        <div className='or-price-subtotal'>
                            <div className='or-price-subtotal-text'>
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p>Tax 6.7%</p>
                            </div>
                            <div className='or-price-subtotal-numbers'>
                                <p>${this.state.subtotal}</p>
                                <p>$0.00</p>
                                <p>${this.state.tax}</p>
                            </div>
                        </div>
                        <div className='or-total'>
                            <ul className='or-total-payment'>
                                <li>Payment Method:</li>
                                <li>{this.state.paymentType}</li>
                            </ul>
                            <ul className='or-total-price'>
                                <li>Total</li>
                                <li>${this.state.total}</li>
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

export default connect(mapStateToProps, {addToCart, updateCustomer, updateUser, getCartItem}) (OrderReview);
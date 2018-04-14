import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './singleOrder.css';
import { updateUser } from '../../../actions/actionCreators';
import { connect } from 'react-redux';
import { getOrderSum, getOrderItems } from '../../../services/order.services'
import SingleOrderItem from './SingleOrderItem/SingleOrderItem';

class SingleOrder extends Component {
    constructor(props){
        super(props);
        this.state = {
            sum: [],
            orderItems: []
        }

    }

        componentDidMount() {
            const orderid = this.props.match.params.orderid;
            const userid = this.props.match.params.userid;
            getOrderSum(orderid)
                .then( res => {
                    if(res.status !== 200) {
                        console.log(res);
                    }
                    else {
                        this.setState({ sum: res.data[0]});
                        console.log(res.data);
                    }
                })
                .catch( err => {throw err})
            getOrderItems(userid, orderid)
                .then( res => {
                    if(res.status !== 200) {
                        console.log(res);
                    }
                    else {
                        this.setState({ orderItems: res.data});
                        console.log(res.data);
                    }
                })
        }

    render(){
        let orderNumber = this.props.match.params.orderid;
        let orderPrice = this.state.sum['sum'];
        let firstName = this.props.userInfo.first_name;
        let lastName = this.props.userInfo.last_name;
        let company = this.props.userInfo.company;
        let address = this.props.userInfo.address;
        let city = this.props.userInfo.city;
        let usState = this.props.userInfo.state;
        let zipCode = this.props.userInfo.zip_code;
        let phone = this.props.userInfo.phone;
        let email = this.props.userInfo.email;
        let paymentMethod = this.state.orderItems[0];
        console.log(paymentMethod);
        console.log(this.state);
        const orderItems = this.state.orderItems;
        const displayOrderItems = orderItems.map( orderItem => {
            const index = orderItems.indexOf(orderItem);
            return ( <SingleOrderItem
                        key={`orderItem${index}`}
                        index={index}
                        productid={orderItem.product_id}
                        quantity={orderItem.quantity}
                        price={orderItem.price}
                        total={orderItem.total}
                        salesTax={orderItem.sales_tax}
                        paymentType={orderItem.payment_type}
            />)
        })
        return(
            <div className='single-wrap'>
                <Header />
                <div className='single-body'>
                    <h1>Order #{orderNumber}</h1>
                    <div className='single-customer-info'>
                        <div className='single-customer-left'>
                            <p>{firstName} {lastName}</p>
                            <p>{company}</p>
                            <p>{address}</p>
                            <p>{city}, {usState} {zipCode}</p>
                        </div>
                        <div className='single-customer-right'>
                            <p>{phone}</p>
                            <p>{email}</p>
                            <p>Date: 03/27/2015</p>
                        </div>
                    </div>
                    <div className='single-items'>
                        {displayOrderItems}
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
                                <li>{orderPrice}</li>
                            </ul>
                        </div>
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

export default connect(mapStateToProps, {updateUser}) (SingleOrder);
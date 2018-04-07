import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './orderHistory.css';

class OrderHistory extends Component {
    render(){
        return(
            <div className='history-wrap'>
                <Header />
                <div className='history-body'>
                    <h2>Order Review</h2>
                    <div className='order-history'>
                        <Link to='/singleorder'>
                            <div className='single-order'>
                                <div className='order-num-date'>
                                    <p>Order Number: 1234</p>
                                    <p>Date: 03/27/2015</p>
                                </div>
                                <p>Price: $50.49</p>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='single-order'>
                                <div className='order-num-date'>
                                    <p>Order Number: 1223</p>
                                    <p>Date: 12/10/2014</p>
                                </div>
                                <p>Price: $74.89</p>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='single-order'>
                                <div className='order-num-date'>
                                    <p>Order Number: 1200</p>
                                    <p>Date: 09/20/2014</p>
                                </div>
                                <p>Price: $31.95</p>
                            </div>
                        </Link>
                        <Link to=''>
                            <div className='single-order'>
                                <div className='order-num-date'>
                                    <p>Order Number: 1111</p>
                                    <p>Date: 04/01/2014</p>
                                </div>
                                <p>Price: $20.56</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default OrderHistory;
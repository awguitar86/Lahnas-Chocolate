import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../orderHistory.css';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
    }



    render(){
        return(
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
                    </div>
        )
    }
}

export default Order;
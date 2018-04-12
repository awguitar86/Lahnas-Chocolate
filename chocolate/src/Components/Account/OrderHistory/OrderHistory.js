import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Order from './Order/Order';
import { getOrders } from '../../../services/order.services';
import './orderHistory.css';

class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: []
        }
        this.pullFromBackend = this.pullFromBackend.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.userid;
        this.pullFromBackend( id );
    }

    pullFromBackend( userid ){
        getOrders( userid )
          .then( res => {
            if (res.status !== 200) {
              console.log(res);
            }
            else {
              this.setState({orders: res.data})
            }
          })
          .catch(err => {throw err});
      }



    render(){
        const orders = this.state.orders;
        console.log(orders);
        // const displayOrders = orders.map( order => {
        //     const index = orders.indexOf(order);
        //     return <Order key={index} index={index}
        // })
        return(
            <div className='history-wrap'>
                <Header />
                <div className='history-body'>
                    <h2>Order Review</h2>
                    <div className='order-history'>

                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default OrderHistory;
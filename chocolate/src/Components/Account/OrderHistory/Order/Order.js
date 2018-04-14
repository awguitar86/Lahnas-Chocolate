import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../orderHistory.css';
import { updateUser } from '../../../../actions/actionCreators';
import { connect } from 'react-redux';
import { getOrderSum } from '../../../../services/order.services';

class Order extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sum: []
        };
    }

    // componentDidMount() {
    //     const { id } = this.props;
    //     getOrderSum(id)
    //     .then( res => {
    //         if(res.status !== 200) {
    //             console.log(res);
    //         }
    //         else {
    //             this.setState({ sum: res.data});
    //         }
    //     })
    //     .catch( err => {throw err})
    // }

    render(){
        // console.log(this.state);
        // const price = this.state.
        const { index, userid, id, orderDate, orderPrice } = this.props;
        return(
                <Link to={`/singleorder/${userid}/${id}`}>
                    <div className='single-order'>
                        <div className='order-num-date'>
                            <p>Order Number: {id}</p>
                            <p>Date: {orderDate}</p>
                        </div>
                        <p>Price: ${orderPrice}</p>
                    </div>
                </Link>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {updateUser}) (Order);
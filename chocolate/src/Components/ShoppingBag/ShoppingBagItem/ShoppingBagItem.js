import React, { Component } from 'react';
import { addToCart } from '../../../actions/actionCreators';
import { connect } from 'react-redux';
import '../shoppingBag.scss';

class ShoppingBagItem extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        const { productName, price, qty } = this.props;
        const total = (price * qty).toFixed(2);
        return(
            <div className='shopping-bag-item'>
                <h4>{productName}</h4>
                <div className='shopping-item-total'>
                    <div className='item-remove'></div>
                    <div>${price}</div>
                    <div>Qty: {qty}</div>
                    <div className='item-total'>${total}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart}) (ShoppingBagItem);
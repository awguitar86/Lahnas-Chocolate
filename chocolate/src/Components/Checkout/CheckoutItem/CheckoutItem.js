import React, { Component } from 'react';
import { addToCart, updateCustomer } from '../../../actions/actionCreators';
import { connect } from 'react-redux';
import '../checkout.css';

class CheckoutItem extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){

        return(
            <div >

            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart, updateCustomer}) (CheckoutBagItem);
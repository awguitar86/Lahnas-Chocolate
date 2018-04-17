import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { addToCart } from '../../actions/actionCreators';
import { connect } from 'react-redux';
import ShoppingBagItem from './ShoppingBagItem/ShoppingBagItem';
import './shoppingBag.css';

class ShoppingBag extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        const shoppingItems = this.props.cartReducer.cart;
        console.log(shoppingItems);
        let totalArr = [0];
        let bagSubTotal;
        console.log(totalArr);
        const displayOrderItems = shoppingItems.map( shoppingItem => {
            const index = shoppingItems.indexOf(shoppingItem);
            totalArr.push(Number((shoppingItem.product['price'] * shoppingItem.qty).toFixed(2)));
            return ( <ShoppingBagItem
                        key={`orderItem${index}`}
                        index={index}
                        productid={shoppingItem.product['id']}
                        productName={shoppingItem.product['name']}
                        price={shoppingItem.product['price']}
                        qty={shoppingItem.qty}
            />)
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
            <div className='shopping-wrap'>
                <Header />
                <div className='shopping-body'>
                    <h1>Items in Your Bag</h1>
                    {displayOrderItems}
                    <div className='bag-price'>
                        <div className='bag-subtotal'>
                            <div className='bag-subtotal-text'>
                                <p>Subtotal</p>
                                <p>Shipping</p>
                                <p>Tax 6.7%</p>
                            </div>
                            <div className='bag-subtotal-numbers'>
                                <p>${bagSubTotal}</p>
                                <p>$0.00</p>
                                <p>${taxes}</p>
                            </div>
                        </div>
                        <div className='bag-total'>
                            <p>Total</p>
                            <p>${bagTotal}</p>
                        </div>
                    </div>
                    <div className='bag-checkout-button'>
                        <Link to='/checkout'><button>CHECKOUT</button></Link>
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

export default connect(mapStateToProps, {addToCart}) (ShoppingBag);
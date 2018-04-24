import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { createCartItems, getCartItems } from '../../../services/cart.services';
import { getProduct } from '../../../services/products.service';
import { addToCart, updateUser, getCartItem } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import LahnaBarPic from '../../../images/lahnaBar.jpg';
import '../chocolates.css';

class LahnaBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            product_id: '',
            name: '',
            price: '',
            quantity: 1
        }
        this.handleAddToBag = this.handleAddToBag.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
    }

    componentWillMount(){
        let productid = this.props.match.params.productid;
        getProduct(productid)
            .then( res => {
                let productInfo = res.data[0];
                console.log(res.data[0]);
                this.setState({
                    product_id: productInfo.id,
                    name: productInfo.name,
                    price: productInfo.price
                });
          })
    }

    handleAddToBag(){
        if(this.props.userInfo.id){
            let user_id = this.props.userInfo.id;
            const { product_id, quantity } = this.state;
            const reqBody = {user_id, product_id, quantity};
            createCartItems(reqBody)
                .then( res => {
                    getCartItems(user_id)
                        .then( res => {
                            console.log(res.data);
                            this.props.getCartItem(res.data);
                        })
                })
                .catch( err => {throw err})
        }
        else {
            this.props.addToCart(this.state);
        }
    }

    handleQtyChange(e){
        let newState = this.state.qty;
        newState = Number(e.target.value);
        this.setState({ quantity: newState })
        console.log(e.target.value);
    }

    render(){
        console.log(this.state);
        console.log(this.props.cartReducer);
        console.log(this.props.cartItem);
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Lahna Bar</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1' name='qty' onChange={ e => {this.handleQtyChange(e) }}/>
                                <h3>$2.49</h3>
                            </div>
                            <p>
                                The Lahna Bar is one of the most delicious chocolate confections in the world.
                                A circular bar of chocolate with almonds, coconut, and pecans all over.
                                This is one of those treats that you can easily sneak into your purse for a
                                secret snack later. Make sure to take some wipes with you to wipe off the evidence from your face.
                            </p>
                            <div className='product-ingredients'>
                                <h3>Ingredients</h3>
                                <p>
                                    Love, joy, sweat, tears, marshmollow, chocolate, sometimes blood,
                                    roasted pecans, snot from grandkids, and coconut. Contains lots of
                                    sugar, milk, nuts, a the taste of guilt-free self indulgence. Gluten-free.
                                </p>
                            </div>
                        </div>
                        <div className='product-picture'>
                            <img src={LahnaBarPic} alt='lahna bar'/>
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

export default connect(mapStateToProps, {addToCart, updateUser, getCartItem}) (LahnaBar);
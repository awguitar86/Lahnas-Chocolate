import React, { Component } from 'react';
// import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { getProduct } from '../../../services/products.service';
import { createCartItems, getCartItems } from '../../../services/cart.services';
import { updateUser, addToCart, getCartItem } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import CaramelPic from '../../../images/caramels.jpg';
import '../chocolates.css';

class Caramels extends Component {
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
        let newState = this.state.quantity;
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
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Grandma's Caramels</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1' name='quantity' onChange={ e => {this.handleQtyChange(e) }}/>
                                <h3>$0.60</h3>
                            </div>
                            <p>
                                Lahna’s Grandma’s Caramels are Grandma Florence’s original caramel wrapped in kiss paper.
                                These are a great little treat for adults, but be careful giving them to toddlers. When they
                                eat them the caramel tends to get stuck to the roof of their mouth. And many times you have
                                no idea this happens for days on end. And all the while you’re wondering why your child is
                                going nuts! Almost as if he or she is on a crazy sugar high!…oh wait, they are.
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
                            <img src={CaramelPic} alt='caramels'/>
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

export default connect(mapStateToProps, {updateUser, addToCart, getCartItem}) (Caramels);
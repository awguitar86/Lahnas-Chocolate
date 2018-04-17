import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { getProduct } from '../../../services/products.service';
import { addToCart, addQty } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import LollipopPic from '../../../images/lollipop.jpg';
import '../chocolates.css';

class Lollipop extends Component {
    constructor(props){
        super(props);
        this.state = {
            productid: 4,
            qty: 1
        }
        this.handleAddToBag = this.handleAddToBag.bind(this);
        this.handleQtyChange = this.handleQtyChange.bind(this);
    }

    handleAddToBag(){
        let productid = this.state.productid;
        getProduct(productid)
            .then( res => {
                let productInfo = res.data[0];
                this.props.addToCart(productInfo);
          })
        let qtyInfo = this.state.qty;
        this.props.addQty(qtyInfo);
    }

    handleQtyChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = Number(e.target.value);
        this.setState({ [key]: newState })
        console.log(e.target.value);
    }

    render(){
        console.log(this.props.cartReducer);
        console.log(this.props.qtyReducer);
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Caramel Lollipop</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1' name='qty' onChange={ e => {this.handleQtyChange(e) }}/>
                                <h3>$1.75</h3>
                            </div>
                            <p>
                                Lahna’s Caramel Lollipop is one of the most delicious chocolate confections in the world.
                                Heaven on a stick. Handmade caramel dipped in chocolate. When you first hold this lollipop
                                you feel like a child again. And when you take your first bite you act like a child again.
                                For some reason you seem to get it all over your face and hands. And we mean ALL over your
                                face and hands. Like a child. You have been forwarned.
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
                            <img src={LollipopPic} alt='rocky road'/>
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

export default connect(mapStateToProps, {addToCart, addQty}) (Lollipop);
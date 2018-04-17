import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Chocolates from '../ChocolatesInBox/Chocolates';
import { getProduct } from '../../../services/products.service';
import { addToCart, addQty } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import OnePoundBox from '../../../images/onePound.jpg';
import '../chocolates.css';

class OnePound extends Component {
    constructor(props){
        super(props);
        this.state = {
            productid: 10,
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
                            <h1>One Pound Box</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1' name='qty' onChange={ e => {this.handleQtyChange(e) }}/>
                                <h3>$29.95</h3>
                            </div>
                            <p>
                                Lahna’s One Pound box of chocolates are filled with the very best chocolates
                                you will ever have. Don’t worry about taking the first bite because you’re
                                not sure what the heck is inside of it. These are only the very best tasting
                                ones that everybody will love so much they will bite peoples fingers off for them.
                                Literally, bite fingers off.  This box contains 5 of each chocolate.
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
                            <img src={OnePoundBox} alt='box of chocolates'/>
                        </div>
                    </div>
                    <Chocolates />
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart, addQty}) (OnePound);
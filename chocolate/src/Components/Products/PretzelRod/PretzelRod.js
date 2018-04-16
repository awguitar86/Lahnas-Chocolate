import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { getProduct } from '../../../services/products.service';
import { addToCart } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import PretzelRodPic from '../../../images/pretzelRod.jpg';
import '../chocolates.css';

class PretzelRod extends Component {
    constructor(props){
        super(props);
        this.state = {
            productid: 2
        }
        this.handleAddToBag = this.handleAddToBag.bind(this);
    }

    handleAddToBag(){
        let productid = this.state.productid;
        getProduct(productid)
            .then( res => {
                let productInfo = res.data[0];
                this.props.addToCart(productInfo);
          })

    }

    render(){
        console.log(this.props.cartReducer);
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Pretzel Rod</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1'/>
                                <h3>$2.49</h3>
                            </div>
                            <p>
                                Lahna’s Pretzel Rod is one of the most delicious chocolate confections in the world.
                                A fresh 8″  pretzel rod enrobed in caramel and dipped in chocolate. This is one of
                                those treats that you can easily sneak into your purse for a secret snack later.
                                Make sure it’s in that hidden pocket where you keep your lady products though.
                                Your husband and kids won’t touch that pocket.
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
                            <img src={PretzelRodPic} alt='rocky road'/>
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

export default connect(mapStateToProps, {addToCart}) (PretzelRod);
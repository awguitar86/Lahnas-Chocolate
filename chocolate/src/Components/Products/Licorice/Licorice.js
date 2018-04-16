import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { getProduct } from '../../../services/products.service';
import { addToCart } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import LicoricePic from '../../../images/grandmasLicoriceCaramel.jpg';
import '../chocolates.css';

class Licorice extends Component {
    constructor(props){
        super(props);
        this.state = {
            productid: 7
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
                            <h1>Grandma's Licorice Caramels</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1'/>
                                <h3>$0.60</h3>
                            </div>
                            <p>
                                Lahna’s Grandma’s Licorice Carmels are absolutely amazing! This ample and incredibly smooth confection
                                rivals all black licorice. You will not be able to just have one. And everyone will know that you didn’t
                                just have one. That’s because after eating many of these, your teeth will turn black. If this is your
                                little treat your trying to hide from others, it won’t work. It would be great if you would eat a few
                                of these before your wedding photos! They would be the best wedding photos ever!
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
                            <img src={LicoricePic} alt='licorice caramel'/>
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

export default connect(mapStateToProps, {addToCart}) (Licorice);
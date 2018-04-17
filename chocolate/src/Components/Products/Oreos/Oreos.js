import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { getProduct } from '../../../services/products.service';
import { addToCart, addQty } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import OreosPic from '../../../images/oreos.jpg';
import '../chocolates.css';

class Oreos extends Component {
    constructor(props){
        super(props);
        this.state = {
            productid: 5,
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
                            <h1>Chocolate Dipped Oreos</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1' name='qty' onChange={ e => {this.handleQtyChange(e) }}/>
                                <h3>$0.60</h3>
                            </div>
                            <p>
                                Lahna’s Chocolate Dipped Oreos are America’s favorite cookie smothered in special milk chocolate.
                                US Senator Orrin Hatch loved them so much he ordered 10,000 of them! These are so good that many
                                people turn into the cookie monster and shove the whole thing in their mouths while chewing as fast
                                as they can.
                            </p>
                            <div className='product-ingredients'>
                                <h3>Ingredients</h3>
                                <p>
                                    Love, joy, sweat, tears, marshmollow, chocolate, sometimes blood,
                                    roasted pecans, snot from grandkids, and coconut. Contains lots of
                                    sugar, milk, nuts, and the taste of guilt-free self indulgence. Gluten-free.
                                </p>
                            </div>
                        </div>
                        <div className='product-picture'>
                            <img src={OreosPic} alt='rocky road'/>
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

export default connect(mapStateToProps, {addToCart, addQty}) (Oreos);
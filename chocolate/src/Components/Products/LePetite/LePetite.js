import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import LePetiteChocolates from '../ChocolatesInBox/LePetiteChocolates';
import { getProduct } from '../../../services/products.service';
import { addToCart, addQty } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

import LePetiteBox from '../../../images/lePetite.jpg';
import '../chocolates.css';

class LePetite extends Component {
    constructor(props){
        super(props);
        this.state = {
            productid: 8,
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
                            <h1>Le Petite Box</h1>
                            <div className='product-add'>
                                <button onClick={this.handleAddToBag}>Add To Cart</button>
                                <input placeholder='1' name='qty' onChange={ e => {this.handleQtyChange(e) }}/>
                                <h3>$4.95</h3>
                            </div>
                            <p>
                                Lahna’s Le Petite box of chocolates are the very best little gift to give to someone.
                                It is the perfect amount of chocolate to help someone feel comfortaed and loved.
                                This box conatins one piece each of the Sea Salt Caramel, Mint Truffle, Coconut Rough,
                                and Pecan Turle.
                            </p>
                            <div className='product-ingredients'>
                                <h3>Ingredients</h3>
                                <p>
                                    Love, joy, sweat, tears, marshmollow, chocolate, sometimes blood, roasted pecans, snot
                                    from grandkids, and coconut. Contains lots of sugar, milk, nuts, a the taste of
                                    guilt-free self indulgence. Gluten-free.
                                </p>
                            </div>
                        </div>
                        <div className='product-picture'>
                            <img src={LePetiteBox} alt='box of chocolates'/>
                        </div>
                    </div>
                    <LePetiteChocolates />
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart, addQty}) (LePetite);
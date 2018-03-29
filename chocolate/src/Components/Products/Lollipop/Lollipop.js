import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import LollipopPic from '../../../images/lollipop.jpg';
import '../chocolates.css';

class Lollipop extends Component {
    render(){
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Caramel Lollipop</h1>
                            <div className='product-add'>
                                <button>Add To Cart</button>
                                <input placeholder='1'/>
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

export default Lollipop;
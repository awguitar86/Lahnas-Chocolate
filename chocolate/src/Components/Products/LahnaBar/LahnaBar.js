import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import LahnaBarPic from '../../../images/lahnaBar.jpg';
import '../chocolates.css';

class LahnaBar extends Component {
    render(){
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Lahna Bar</h1>
                            <div className='product-add'>
                                <button>Add To Cart</button>
                                <input placeholder='1'/>
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

export default LahnaBar;
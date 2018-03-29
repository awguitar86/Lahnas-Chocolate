import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Chocolates from '../ChocolatesInBox/Chocolates';

import OnePoundBox from '../../../images/onePound.jpg';
import '../chocolates.css';

class OnePound extends Component {
    render(){
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>One Pound Box</h1>
                            <div className='product-add'>
                                <button>Add To Cart</button>
                                <input placeholder='1'/>
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

export default OnePound;
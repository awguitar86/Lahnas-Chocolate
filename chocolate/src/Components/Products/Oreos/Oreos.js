import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import OreosPic from '../../../images/oreos.jpg';
import '../chocolates.css';

class Oreos extends Component {
    render(){
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Chocolate Dipped Oreos</h1>
                            <div className='product-add'>
                                <button>Add To Cart</button>
                                <input placeholder='1'/>
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

export default Oreos;
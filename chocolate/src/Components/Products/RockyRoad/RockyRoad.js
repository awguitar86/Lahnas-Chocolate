import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import RockyRoadPic from '../../../images/rockyRoad.jpg';
import '../chocolates.css';

class RockyRoad extends Component {
    render(){
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Rocky Road</h1>
                            <div className='product-add'>
                                <button>Add To Cart</button>
                                <input placeholder='1'/>
                                <h3>$3.75</h3>
                            </div>
                            <p>
                                Lahna’s Rocky Road is one of the very best chocolate confections out there.
                                A delicious 3-ounce brick of marshmallow, chocolate, coconut, and roasted
                                pecans will give you a sugar high that will put your kids sugar high to shame.
                                Just don’t tell your husband, and you should be fine.
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
                            <img src={RockyRoadPic} alt='rocky road'/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default RockyRoad;
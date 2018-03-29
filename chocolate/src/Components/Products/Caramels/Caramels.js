import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import CaramelPic from '../../../images/caramels.jpg';
import '../chocolates.css';

class Caramels extends Component {
    render(){
        return(
            <div className='wrapper'>
                <Header />
                <div className='product-body'>
                    <div className='product-info'>
                        <div className='product-description'>
                            <h1>Grandma's Caramels</h1>
                            <div className='product-add'>
                                <button>Add To Cart</button>
                                <input placeholder='1'/>
                                <h3>$0.60</h3>
                            </div>
                            <p>
                                Lahna’s Grandma’s Caramels are Grandma Florence’s original caramel wrapped in kiss paper.
                                These are a great little treat for adults, but be careful giving them to toddlers. When they
                                eat them the caramel tends to get stuck to the roof of their mouth. And many times you have
                                no idea this happens for days on end. And all the while you’re wondering why your child is
                                going nuts! Almost as if he or she is on a crazy sugar high!…oh wait, they are.
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
                            <img src={CaramelPic} alt='caramels'/>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Caramels;
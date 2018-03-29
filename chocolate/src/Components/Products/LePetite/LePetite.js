import React, { Component } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import LePetiteChocolates from '../ChocolatesInBox/LePetiteChocolates';

import LePetiteBox from '../../../images/lePetite.jpg';

class LePetite extends Component {
    render(){
        return(
            <div className='lePetite-wrap'>
                <Header />
                <div className='le-body'>
                    <div className='le-box'>
                        <div className='le-description'>
                            <h1>Le Petite Box</h1>
                            <div className='le-add'></div>
                            <p>
                                Lahna’s Le Petite box of chocolates are the very best little gift to give to someone.
                                It is the perfect amount of chocolate to help someone feel comfortaed and loved.
                                This box conatins one piece each of the Sea Salt Caramel, Mint Truffle, Coconut Rough,
                                and Pecan Turle.
                            </p>
                            <h3>Ingredients</h3>
                            <p>
                                Love, joy, sweat, tears, marshmollow, chocolate, sometimes blood, roasted pecans, snot
                                from grandkids, and coconut. Contains lots of sugar, milk, nuts, a the taste of
                                guilt-free self indulgence. Gluten-free.
                            </p>
                        </div>
                        <div className='le-picture'>
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

export default LePetite;
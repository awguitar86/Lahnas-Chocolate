import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './products.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import LePetite from '../../images/LePetite-top.jpg';
import HalfPound from '../../images/HalfPound-Top.jpg';
import OnePound from '../../images/OnePound-top.jpg';
import TwoPound from '../../images/twoPound.png';
import RockyRoad from '../../images/rockyRoad.jpg';
import PretzelRod from '../../images/pretzelRod.jpg';
import LahnaBar from '../../images/lahnaBar.jpg';
import Lollipop from '../../images/lollipop.jpg';
import Oreos from '../../images/oreos.jpg';
import Caramels from '../../images/caramels.jpg';
import Licorice from '../../images/grandmas-licorice-caramel.png';

class Products extends Component {
  render() {
    return (
        <div className="products-wrap">
            <Header />
            <div className="product-body">
                <div className="boxes-wrap">
                    <h1>Boxed Chocolates</h1>
                    <p>
                        Lahna’s boxed chocolates are full of flavor and joy with each and every bite. When you take that first bite you better be
                        holding on to something, because you might fall to the ground from the amazing taste. They are so perfect you will
                        hide them from other people. You may even lie that you have some. Just don’t hide them in your pocket.
                    </p>
                    <div className='boxes'>
                        <div className='boxes-pictures'>
                            <img src={LePetite} alt='small box of chocolates'/>
                            <h3> Le Petite <br/> $4.95 </h3>
                        </div>
                        <div className='boxes-pictures'>
                            <img src={HalfPound} alt='half pound box of chocolates'/>
                            <h3> Half Pound <br/> $14.95 </h3>
                        </div>
                        <div className='boxes-pictures'>
                            <img src={OnePound} alt='one pound box of chocolates'/>
                            <h3> One Pound <br/> $29.95 </h3>
                        </div>
                        <div className='boxes-pictures'>
                            <img src={TwoPound} alt='two pound box of chocolates'/>
                            <h3> Two Pound <br/> $59.95 </h3>
                        </div>
                    </div>
                </div>

                <div className="confections-wrap">
                    <h1>Chocolate Confections</h1>
                    <p>
                        Lahna’s chocolate confections are prepared and hand-dipped with love a care. Each one of these beautiful
                        confections are delicious and bring comfort to the soul. These are great as gifts for any occasion.
                        Or if you just want to be selfish you can buy them for yourself too! Just be sure to wipe your
                        face off when you’re done.
                    </p>
                    <div className='confections-top'>
                            <div className='confections-top-pictures'>
                                <img src={RockyRoad} alt='rocky road'/>
                                <h4> Rocky Road <br/> $3.75 </h4>
                            </div>
                            <div className='confections-top-pictures'>
                                <img src={PretzelRod} alt='pretzel rod'/>
                                <h4> Pretzel Rod <br/> $2.49 </h4>
                            </div>
                            <div className='confections-top-pictures'>
                                <img src={LahnaBar} alt='lahna bar'/>
                                <h4> Lahna Bar <br/> $2.49 </h4>
                            </div>
                    </div>
                    <div className='confections-bottom'>
                            <div className='confections-bottom-pictures'>
                                <img src={Lollipop} alt='chocolate lollipop'/>
                                <h4> Caramel Lollipop <br/> $1.75 </h4>
                            </div>
                            <div className='confections-bottom-pictures'>
                                <img src={Oreos} alt='oreos'/>
                                <h4> Chocolate Dipped Oreos <br/> $0.60 </h4>
                            </div>
                            <div className='confections-bottom-pictures'>
                                <img src={Caramels} alt='caramels'/>
                                <h4> Grandma’s Carmels <br/> $0.60 </h4>
                            </div>
                            <div className='confections-bottom-pictures'>
                                <img src={Licorice} alt='licorice'/>
                                <h4> Grandma’s Licorice Carmels <br/> $0.60 </h4>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Products;
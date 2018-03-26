import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import LePetite from '../../images/lePetite.jpg';
import HalfPound from '../../images/halfPound.jpg';
import OnePound from '../../images/onePound.jpg';
import RockyRoad from '../../images/rockyRoad.jpg';
import PretzelRod from '../../images/pretzelRod.jpg';
import LahnaBar from '../../images/lahnaBar.jpg';
import Lollipop from '../../images/lollipop.jpg';
import Oreos from '../../images/oreos.jpg';
import Caramels from '../../images/caramels.jpg';

class Home extends Component {
  render() {
    return (
        <div className="home-wrap">
            <Header />
            <div className="body">
                <div className="hero">
                    <a href="">Shop Now</a>
                </div>
                <div className="body-content">
                    <img src={LePetite} alt='small box of chocolates'/>
                    <img src={HalfPound} alt='half pound box of chocolates'/>
                    <img src={OnePound} alt='one pound box of chocolates'/>
                    <img src={RockyRoad} alt='rocky road'/>
                    <img src={PretzelRod} alt='pretzel rod'/>
                    <img src={LahnaBar} alt='lahna bar'/>
                    <img src={Lollipop} alt='chocolate lollipop'/>
                    <img src={Oreos} alt='oreos'/>
                    <img src={Caramels} alt='caramels'/>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Home;
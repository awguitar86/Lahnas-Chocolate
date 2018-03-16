import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import Berries from '../../images/berries.jpg';
import Nuts from '../../images/nuts.jpg';

class Home extends Component {
  render() {
    return (
        <div className="home-wrap">
            <Header />
            <div className="body">
                <div className="hero">
                    <a href="">Shop Boxes</a>
                </div>
                <div className="body-content">
                    <div className="right-content">
                        <a href="" ><div></div></a>
                        <a href="" className="holiday-special"><p>Holiday</p></a>
                    </div>
                    <div className="left-content">
                        <a href=""><div></div></a>
                        <a href="" className="holiday-special"><p>Monthly Special</p></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Home;
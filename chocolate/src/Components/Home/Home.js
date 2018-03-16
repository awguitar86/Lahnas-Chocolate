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
                    <p>Shop Boxes</p>
                </div>
                <div className="body-content">
                    <div className="right-content">
                        <div></div>
                        <p>Holiday</p>
                    </div>
                    <div className="left-content">
                        <div></div>
                        <p>Monthly Special</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
  }
}

export default Home;
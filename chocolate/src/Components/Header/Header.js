import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import logo from '../../images/LCLogo.svg';
import shoppingBag from '../../images/bag-icon.svg';

class Header extends Component {
  render() {
    return (
        <div className="header-wrap">
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Lahna's Chocolate Logo"/></Link>
                </div>
                <div className="nav">
                    <Link to="/products"> Products </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
                <div className="login-register-wrap">
                    <div className="login-regi">
                        <Link to="/login"> Login </Link>
                        <Link to="/register"> Register </Link>
                    </div>
                    <Link to='/bag' className='bag'><img src={shoppingBag} alt="shopping bag"/></Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
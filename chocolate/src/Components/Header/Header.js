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
                    <a href="">Products</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
                <div className="login-register-wrap">
                    <div className="login-regi">
                        <a href="">Login</a>
                        <a href="">Register</a>
                    </div>
                    <img src={shoppingBag} alt="shopping bag"/>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import logo from '../../images/LCLogo.svg';

class Header extends Component {
  render() {
    return (
        <div className="header-wrap">
            <div className="header">
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Lahna's Chocolate Logo"/></Link>
                </div>
                <div className="nav">
                    <a href="">Confections</a>
                    <a href="">Boxes</a>
                    <a href="">About</a>
                    <a href="">Contact</a>
                </div>
                <div className="login-register-wrap">
                    <div className="login-regi">
                        <a href="">Login</a>
                        <a href="">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
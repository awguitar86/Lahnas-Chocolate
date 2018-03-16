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
                    <img src={logo} alt="Lahna's Chocolate Logo"/>
                </div>
                <div className="nav">
                    <p>Confections</p>
                    <p>Boxes</p>
                    <p>About</p>
                    <p>Contact</p>
                </div>
                <div className="login-register-wrap">
                    <div className="login-regi">
                        <p>Login</p>
                        <p>Register</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
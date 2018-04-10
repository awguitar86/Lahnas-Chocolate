import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

import HamDropdown from '../HamDropDown/HamDropDown';
import logo from '../../images/LCLogo.svg';
import shoppingBag from '../../images/bag-icon.svg';
import hamMenu from '../../images/hamMenu.png';

class Header extends Component {

  render() {
    // const baseURL = '/api/users';
    return (
        <div className="header-wrap">
            <div className="header">
                <HamDropdown key="dropdown-ham-menu" className="ham-menu" img={hamMenu} options={[
                        {text: 'Products', to:'/products'},
                        {text: 'About', to:'/about'},
                        {text: 'Contact', to:'/contact'},
                        {text: 'Login', to: '/login'},
                        {text: 'Register', to: 'register'},
                        {text: 'Account', to: `/dashboard/:id`},
                ]}/>
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
                        <Link to= '/register'> Register </Link>
                    </div>
                    <Link to='/shoppingbag' className='bag'><img src={shoppingBag} alt="shopping bag"/></Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
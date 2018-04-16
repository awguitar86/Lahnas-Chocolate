import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { addToCart } from '../../actions/actionCreators';
import { connect } from 'react-redux';

import HamDropdown from '../HamDropDown/HamDropDown';
import logo from '../../images/LCLogo.svg';
import shoppingBag from '../../images/bag-icon.svg';
import shoppingBagOn from '../../images/bag-icon-on.svg';
import hamMenu from '../../images/hamMenu.png';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            bag: false
        }
    }

    componentWillMount() {
        const productBag = this.props.cartReducer['cart'];
        if(productBag.length > 0){
            this.setState({bag: true});
        }
    }


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
                    <Link to='/shoppingbag' className='bag'><img src={this.state.bag ? shoppingBagOn : shoppingBag} alt="shopping bag"/></Link>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart}) (Header);
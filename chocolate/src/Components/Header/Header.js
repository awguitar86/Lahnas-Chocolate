import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './header.css';
import { addToCart, updateUser, getCartItem } from '../../actions/actionCreators';
import { getCartItems } from '../../services/cart.services';
import { connect } from 'react-redux';
import HamDropdown from '../HamDropDown/HamDropDown';
import logo from '../../images/LCLogo.svg';
import shoppingBag from '../../images/bag-icon.svg';
// import shoppingBagOn from '../../images/bag-icon-on.svg';
import hamMenu from '../../images/hamMenu.png';
// import { getCartItems } from '../../services/cart.services';

class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
            bag: 0,
            loggedIn: false
        }
        this.logout = this.logout.bind(this);
    }

    componentWillMount(){
        if(this.props.userInfo.id){
            let userid = this.props.userInfo.id;
            getCartItems(userid)
                .then( res => {
                    console.log(res.data);
                    this.props.getCartItem(res.data);
                })
        }
        if(this.props.userInfo.id){
            if(this.props.cartItem.length > 0){
                this.setState({bag: this.props.cartItem.length});
            }
        }
        else {
            if(this.props.cartReducer.cart.length > 0){
                this.setState({bag: this.props.cartReducer.cart.length});
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.userInfo.id){
            if(nextProps.cartItem.length > 0){
                this.setState({bag: nextProps.cartItem.length});
            }
        }
        else {
            if(nextProps.cartReducer.cart.length > 0){
                this.setState({bag: nextProps.cartReducer.cart.length});
            }
        }
        if(nextProps.userInfo.id){
            this.setState({loggedIn: true});
        }
    }
    logout() {
        this.props.updateUser({});
        this.props.getCartItem({});
        console.log('loggin out...')
        axios.get('/logout').then( res => res);
    }


  render() {
    // const baseURL = '/api/users';
    console.log(this.state);
    return (
        <div className="header-wrap">
            <div className="header">
                <HamDropdown
                        key="dropdown-ham-menu"
                        className="ham-menu"
                        img={hamMenu}
                        logout={this.logout}
                        loggedIn={this.state.loggedIn}
                        />
                <div className="logo">
                    <Link to="/"><img src={logo} alt="Lahna's Chocolate Logo"/></Link>
                </div>
                <div className="nav">
                    <Link to="/products"> Products </Link>
                    <Link to="/about"> About </Link>
                    <Link to="/contact"> Contact </Link>
                </div>
                <div className="login-register-wrap">
                    <div className={!this.state.loggedIn ? 'login-regi-true' : 'login-regi-false'}>
                        <a href="http://localhost:7777/login"> Login </a>
                        <Link to= '/register'> Register </Link>
                    </div>
                    <div className={this.state.loggedIn ? 'logout-account-true' : 'logout-account-false'}>
                        <Link to='/' onClick={this.logout}> Logout </Link>
                        <Link to= '/dashboard'> Account </Link>
                    </div>
                    <Link to='/shoppingbag' className='bag'>
                        <div className='bag-count'>{this.state.bag}</div>
                        <img src={shoppingBag} alt="shopping bag"/>
                    </Link>
                </div>
            </div>
        </div>
    );
  }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {addToCart, updateUser, getCartItem}) (Header);
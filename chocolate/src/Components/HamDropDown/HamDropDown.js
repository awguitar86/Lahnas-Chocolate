import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { getUid } from '../../utilities/uid';
import '../Header/header.css';


export default class HamDropdown extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            currentTimeout: null,
            loggedIn: false
        }
    }

    toggle(){
        // debugger;
        if (this.state.currentTimeout !== null) {
            return;
        }

        this.setState({
            // open: true
            open: !this.state.open,
            // currentTimeout: setTimeout(() => this.setState({ currentTimeout: null }), 50),
        });
    }

    handleClick(e) {
        console.log('clicked on ', e.target);
        this.toggle();
    }

    render () {
        const { img, logout, loggedIn } = this.props;
        return (
            <div className='ham-wrap'>

                <div onClick={this.handleClick.bind(this)} className={this.props.className}>
                    <img src={this.props.img} alt=''/>
                </div>
                    <div className={'backdrop ' + (this.state.open ? 'open' : '')} onClick={this.handleClick.bind(this)}/>
                    {this.state.open &&
                    <div className={`${this.props.className} ham-dropdown-menu`} >
                        <div className='ham-menu-items'><Link to='/products'>Products</Link></div>
                        <div className='ham-menu-items'><Link to='/about'>About</Link></div>
                        <div className='ham-menu-items'><Link to='/contact'>Contact</Link></div>
                        <div className={loggedIn ? 'ham-false' : 'ham-true'}><Link to='/register'>Register</Link></div>
                        <div className={loggedIn ? 'ham-false' : 'ham-true'}><a href="http://localhost:7777/login">Login</a></div>
                        <div className={loggedIn ? 'ham-account-true' : 'ham-false'}><Link to='/dashboard'>Account</Link></div>
                        <div className={loggedIn ? 'ham-account-true' : 'ham-false'}><Link to='/logout' onClick={logout}>Logout</Link></div>
                    </div>}
            </div>
        )
    }
}


// options={[
//     {text: 'Products', href:'/products'},
//     {text: 'About', href:'/about'},
//     {text: 'Contact', href:'/contact'},
//     {text: 'Login', href: "http://localhost:7777/login", className: this.state.loggedIn ? 'ham-false' : 'ham-true', },
//     {text: 'Register', href: '/register', className: this.state.loggedIn ? 'ham-false' : 'ham-true'},
//     {text: 'Account', href: '/dashboard', className: this.state.loggedIn ? 'ham-account-true' : 'ham-false'},
//     {text: 'Logout', href: '/', onClick: this.logout, className: this.state.loggedIn ? 'ham-account-true' : 'ham-false'},
// ]}




//     {this.props.options.map(option => (
//         <div key={option.key || (option.key = getUid())} onClick={this.handleClick.bind(this)} className="ham-dropdown-menu-content-box">
//             <a to={option.to} className={`ham-dropdown-menu-content ${option.className}`} onClick={option.onClick} href={option.href}>
//                 { option.text }
//             </a>
//         </div>
//     ))}
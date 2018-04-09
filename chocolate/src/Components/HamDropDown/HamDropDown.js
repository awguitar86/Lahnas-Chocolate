import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getUid } from '../../utilities/uid';
import '../Header/header.css';


export default class HamDropdown extends Component {
    constructor(){
        super()
        this.state = {
            open: false,
            currentTimeout: null,
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
        return (
            <div className='ham-wrap'>

                <div onClick={this.handleClick.bind(this)} className={this.props.className}>
                    <img src={this.props.img} alt=''/>
                </div>
                    <div className={'backdrop ' + (this.state.open ? 'open' : '')} onClick={this.handleClick.bind(this)}/>
                    {this.state.open &&
                    <div className={`${this.props.className} ham-dropdown-menu`} >{
                        this.props.options.map(option => (
                            <div key={option.key || (option.key = getUid())} onClick={this.handleClick.bind(this)} className="ham-dropdown-menu-content-box">
                                <Link to={option.to} className="ham-dropdown-menu-content">
                                    { option.img ? <img src={option.img} alt={option.text} /> : option.text }
                                </Link>
                            </div>
                        ))}
                    </div>}
            </div>
        )
    }
}
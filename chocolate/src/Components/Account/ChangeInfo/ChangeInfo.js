import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './changeInfo.css';

class ChangeInfo extends Component {
    render(){
        return(
            <div className='change-wrap'>
                <Header />
                <div className='change-body'>
                    <h1>Change Account Info</h1>
                    <div className='change-inputs'>
                        <input className='change-firstName' placeholder='First Name' />
                        <input className='change-lastName' placeholder='Last Name'/>
                        <input className='change-company' placeholder='Company(optional)'/>
                        <input className='change-address' placeholder='Address'/>
                        <input className='change-city' placeholder='City'/>
                        <input className='change-state' placeholder='State' />
                        <input className='change-zip' placeholder='Zip Code'/>
                        <input className='change-phone' placeholder='Phone Number'/>
                        <input className='change-email' placeholder='Email'/>
                        <input className='change-reTypeEmail' placeholder='Re-Type Email'/>
                        <input className='change-password' placeholder='Password' />
                        <input className='change-reTypePassword' placeholder='Re-Type Password'/>
                    </div>
                    <div className='change-buttons'>
                        <Link to='/dashboard'><button className='change-btn'>SAVE</button> </Link>
                        <Link to='/dashboard'><button className='change-cancel-btn'>CANCEL</button></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ChangeInfo;
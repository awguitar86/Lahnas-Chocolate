import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './register.css';

class Register extends Component {
    render(){
        return(
            <div className='register-wrap'>
                <Header />
                <div className='register-body'>
                    <h1>Register</h1>
                    <div className='regi-inputs'>
                        <input className='firstName' placeholder='First Name' />
                        <input className='lastName' placeholder='Last Name'/>
                        <input className='company' placeholder='Company(optional)'/>
                        <input className='address' placeholder='Address'/>
                        <input className='city' placeholder='City'/>
                        <input className='state' placeholder='State' />
                        <input className='zip' placeholder='Zip Code'/>
                        <input className='phone' placeholder='Phone Number'/>
                        <input className='email' placeholder='Email'/>
                        <input className='reTypeEmail' placeholder='Re-Type Email'/>
                        <input className='password' placeholder='Password' />
                        <input className='reTypePassword' placeholder='Re-Type Password'/>
                    </div>
                    <div className='register-buttons'>
                        <button className='register-btn'>REGISTER</button>
                        <button className='regi-cancel-btn'>CANCEL</button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register;
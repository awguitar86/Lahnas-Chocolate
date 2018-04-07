import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../../services/register.services';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './register.css';

class Register extends Component {
    constructor(props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            company: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            phone: '',
            email: '',
            password: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonRegister = this.handleButtonRegister.bind(this);
    }

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        this.setState({ [key]: newState })
        console.log(e.target.value);
    }

    handleButtonRegister() {
        console.log('register button fired!')
        console.log(this.state);
        const { first_name, last_name, company, address, city, state, zip_code, phone, email, password } = this.state;
        const reqBody = { first_name, last_name, company, address, city, state, zip_code, phone, email, password };
        register(reqBody)
            .then( res => res.data )
            .catch( err => {throw err})
    }

    // handleCheckEmail(){
    //     if(!this.state.email)
    // }

    // handleCheckPassword(){

    // }

    render(){
        return(
            <div className='register-wrap'>
                <Header />
                <div className='register-body'>
                    <h1>Register</h1>
                    <div className='regi-inputs'>
                        <input className='firstName' placeholder='First Name' type="text" name="first_name" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='lastName' placeholder='Last Name'type="text" name="last_name" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='company' placeholder='Company(optional)'type="text" name="company" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='address' placeholder='Address'type="text" name="address" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='city' placeholder='City'type="text" name="city" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='state' placeholder='State' type="text" name="state" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='zip' placeholder='Zip Code'type="text" name="zip_code" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='phone' placeholder='Phone Number'type="text" name="phone" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='email' placeholder='Email'type="text" name="email" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='reTypeEmail' placeholder='Re-Type Email' />
                        <input className='password' placeholder='Password' type="text" name="password" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='reTypePassword' placeholder='Re-Type Password' />
                    </div>
                    <div className='register-buttons'>
                        <button className='register-btn'onClick={this.handleButtonRegister}>REGISTER</button>
                        <Link to='/'><button className='regi-cancel-btn'>CANCEL</button></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Register;
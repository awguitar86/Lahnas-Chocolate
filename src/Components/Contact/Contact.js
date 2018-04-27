import React, { Component } from 'react';
// import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nuts from '../../images/nuts.jpg';
import BoxOfChocolate from '../../images/BoxOfChocolates.jpg';
import './contact.css';
import { contact } from '../../services/nodemailer.services';

class Contact extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            subject: '',
            message: '',
            formSent: false,
            hideButtonSuccess: true,
            buttonLoading: false
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(){
        console.log('register button fired!')
        console.log(this.state);
        const { firstName, lastName, company, email, subject, message } = this.state;
        const reqBody = { firstName, lastName, company, email, subject, message };
        contact(reqBody)
            .then( res => res.data )
            .catch( err => {throw err});
        this.setState({
            firstName: '',
            lastName: '',
            company: '',
            email: '',
            subject: '',
            message: '',
        });
    }

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        this.setState({ [key]: newState })
        console.log(e.target.value);
    }


    render(){
        return(
            <div className='contact-wrap'>
                <div className='contact-body'>
                    <h1>Contact Me</h1>
                    <p>
                        Please fill out this form with any questions, comments, or orders
                        and I will respond to you shortly. Thank you.
                    </p>
                    <div className='contact-form'>
                        <div className='contact-form-left'>
                            <input className='contact-input' value={this.state.firstName} placeholder='First Name' name='firstName' type='text' onChange={ e => {this.handleInputChange(e) }}/>
                            <input className='contact-input' value={this.state.lastName} placeholder='Last Name' name='lastName' type='text' onChange={ e => {this.handleInputChange(e) }}/>
                            <input className='contact-input' value={this.state.company} placeholder='Company' name='company' type='text' onChange={ e => {this.handleInputChange(e) }}/>
                            <input className='contact-input' value={this.state.email} placeholder='Email' name='email' type='text' onChange={ e => {this.handleInputChange(e) }}/>
                        </div>
                        <div className='contact-form-right'>
                            <input className='contact-input' value={this.state.subject} placeholder='Subject' name='subject' type='text' onChange={ e => {this.handleInputChange(e) }}/>
                            <textarea className='contact-input' value={this.state.message} placeholder='Message' name='message' type='text' onChange={ e => {this.handleInputChange(e) }}/>
                        </div>
                    </div>
                    <div className='contact-button'>
                        <button onClick={(e) => {this.handleSubmit()}}>SUBMIT</button>
                    </div>
                    <div className='contact-images'>
                        <img src={Nuts} alt='nuts in chocolate'/>
                        <img src={BoxOfChocolate} alt='box of chocolates' className='BoxOfChocolates'/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Contact;
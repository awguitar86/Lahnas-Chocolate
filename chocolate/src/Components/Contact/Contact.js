import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Nuts from '../../images/nuts.jpg';
import BoxOfChocolate from '../../images/BoxOfChocolates.jpg';
import './contact.css';

class Contact extends Component {
    render(){
        return(
            <div className='contact-wrap'>
                <Header />
                <div className='contact-body'>
                    <h1>Contact Me</h1>
                    <p>
                        Please fill out this form with any questions, comments, or orders
                        and I will respond to you shortly. Thank you.
                    </p>
                    <div className='contact-form'>
                        <div className='contact-form-left'>
                            <input placeholder='First Name'/>
                            <input placeholder='Last Name'/>
                            <input placeholder='Company'/>
                            <input placeholder='Email'/>
                        </div>
                        <div className='contact-form-right'>
                            <textarea placeholder='Message'/>
                        </div>
                    </div>
                    <div className='contact-button'>
                        <button>SUBMIT</button>
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
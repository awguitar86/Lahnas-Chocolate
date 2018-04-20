import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { findUserInfo, updateUserInfo } from '../../../services/account.services';
import './changeInfo.css';

class ChangeInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            id: '',
            first_name: '',
            last_name: '',
            company: '',
            address: '',
            city: '',
            state: '',
            zip_code: '',
            phone: '',
            email: ''
        }
        this.pullFromBackend = this.pullFromBackend.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleButtonSave = this.handleButtonSave.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        this.pullFromBackend( id );
    }

    pullFromBackend( id ){
        findUserInfo( id )
          .then( res => {
            if (res.status !== 200) {
              console.log(res);
            }
            else {
              this.setState({
                id: res.data[0].id,
                first_name: res.data[0].first_name,
                last_name: res.data[0].last_name,
                company: res.data[0].company,
                address: res.data[0].address,
                city: res.data[0].city,
                state: res.data[0].state,
                zip_code: res.data[0].zip_code,
                phone: res.data[0].phone,
                email: res.data[0].email
              })
            }
            console.log(res.data[0]);
          })
          .catch(err => {throw err});
      }

    handleInputChange(e){
        const key = e.target.name;
        let newState = this.state[key];
        newState = e.target.value;
        this.setState({ [key]: newState })
        console.log(e.target.value);
    }

    handleButtonSave() {
        console.log('save button fired!')
        const id = this.state.id;
        const reqBody = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            company: this.state.company,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip_code: this.state.zip_code,
            phone: this.state.phone,
            email: this.state.email
        };
        updateUserInfo( id, reqBody )
            .then( res => {
                if( res.status !== 200 ) {
                    console.log(res);
                }
            })
            .catch( err => {throw err})
    }

    render(){
        let id = this.state.id;
        let firstName = this.state.first_name;
        let lastName = this.state.last_name;
        let company = this.state.company;
        let address = this.state.address;
        let city = this.state.city;
        let state = this.state.state;
        let zipCode = this.state.zip_code;
        let phone = this.state.phone;
        let email = this.state.email;
        console.log(this.state);
        return(
            <div className='change-wrap'>
                <Header />
                <div className='change-body'>
                    <h1>Change Account Info</h1>
                    <div className='change-inputs'>
                        <input className='change-firstName' placeholder={firstName} type="text" name="first_name" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-lastName' placeholder={lastName} type="text" name="last_name" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-company' placeholder={company} type="text" name="company" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-address' placeholder={address} type="text" name="address" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-city' placeholder={city} type="text" name="city" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-state' placeholder={state} type="text" name="state" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-zip' placeholder={zipCode} type="number" name="zip_code" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-phone' placeholder={phone} type="text" name="phone" onChange={ e => {this.handleInputChange(e) }}/>
                        <input className='change-email' placeholder={email} type="text" name="email" onChange={ e => {this.handleInputChange(e) }}/>
                    </div>
                    <div className='change-buttons'>
                        <Link to={`/dashboard/${id}`}><button className='change-btn' onClick={ this.handleButtonSave }>SAVE</button></Link>
                        <Link to={`/dashboard/${id}`}><button className='change-cancel-btn'>CANCEL</button></Link>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ChangeInfo;
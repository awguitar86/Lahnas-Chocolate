import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { findUserInfo } from '../../../services/account.services';
import './dashboard.css';
import { updateUser } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        // const userInfo = this.props.userInfo;
        let id = this.props.userInfo.id;
        let firstName = this.props.userInfo.first_name;
        let lastName = this.props.userInfo.last_name;
        let company = this.props.userInfo.company;
        let address = this.props.userInfo.address;
        let city = this.props.userInfo.city;
        let usState = this.props.userInfo.state;
        let zipCode = this.props.userInfo.zip_code;
        let phone = this.props.userInfo.phone;
        let email = this.props.userInfo.email;
        console.log(this.props.match.params.id);
        return(
            <div className='dash-wrap'>
                <Header />
                <div className='dash-body'>
                    <div className='dash-header'>
                        Hello, {firstName}!
                    </div>
                    <div className='dash-info'>
                        <ul className='dash-user-info'>
                            <li className='dash-user1'>{firstName} {lastName}</li>
                            <li className='dash-user2'>{company}</li>
                            <li className='dash-user3'>{address}</li>
                            <li className='dash-user4'>{city}, {usState} {zipCode}</li>
                            <li className='dash-user5'>{phone}</li>
                            <li className='dash-user6'>{email}</li>
                        </ul>
                        <ul className='dash-links'>
                            <Link to={`/changeinfo/${id}`}><button>Change Account Info</button></Link>
                            <Link to={`/orderhistory/${id}`}><button>Order History</button></Link>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


export default connect(mapStateToProps, {updateUser}) (Dashboard);
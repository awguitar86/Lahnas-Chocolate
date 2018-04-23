import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import { findUserInfo, getUserFromEmail } from '../../../services/account.services';
import './dashboard.css';
import { updateUser } from '../../../actions/actionCreators';
import { connect } from 'react-redux';
import axios from 'axios';

class Dashboard extends Component {
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
            email: '',
            user: {}
        }
    }

    componentDidMount(){
        // let email;
        // let userid;
        axios.get('/check').then(resp => {
            this.setState({ user: resp.data })
            console.log(resp.data.email);
        })
        // getUserFromEmail(email)
        //     .then( res => {
        //         userid = res.data[0].id;
        //         console.log(res.data[0]);
        //     })
        // findUserInfo(userid)
        //     .then( res => {
        //         let newUserInfo = res.data[0];
        //         this.props.updateUser(newUserInfo);
        // })
        // this.setState({
        //     id: this.props.userInfo.id,
        //     first_name: this.props.userInfo.first_name,
        //     last_name: this.props.userInfo.last_name,
        //     company: this.props.userInfo.company,
        //     address: this.props.userInfo.address,
        //     city: this.props.userInfo.city,
        //     state: this.props.userInfo.state,
        //     zip_code: this.props.userInfo.zip_code,
        //     phone: this.props.userInfo.phone,
        //     email: this.props.userInfo.email
        //   })
        // console.log(email);
        // console.log(userid);
    }


    render(){
        // const userInfo = this.props.userInfo;
        // console.log(this.props.userInfo);
        // console.log(this.props.userInfo.id);
        console.log(this.state);
        let id = this.state.id;
        let firstName = this.state.first_name;
        let lastName = this.state.last_name;
        let company = this.state.company;
        let address = this.state.address;
        let city = this.state.city;
        let usState = this.state.state;
        let zipCode = this.state.zip_code;
        let phone = this.state.phone;
        let email = this.state.email;
        // console.log(this.props.match.params.id);
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
                            <Link to={`/orderhistory`}><button>Order History</button></Link>
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
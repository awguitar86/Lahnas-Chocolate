import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
// import { findUserInfo } from '../../../services/account.services';
import './dashboard.css';
import { updateUser } from '../../../actions/actionCreators';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {}
        }
        // this.handleGetUser = this.handleGetUser.bind(this);
    }

    // handleGetUser(){
    //     const id = this.props.match.params.id;
    //     findUserInfo( id )
    //     .then( res => res.data)
    //     .catch( err => {throw err} );
    // }

    // if( res.status !== 200) {
    //     alert(res);
    // }
    // else {
    //     let userInfo = {
    //         id: res.data[0].id,
    //         first_name: res.data[0].first_name,
    //         last_name: res.data[0].last_name,
    //         company: res.data[0].company,
    //         address: res.data[0].address,
    //         city: res.data[0].city,
    //         state: res.data[0].state,
    //         zip_code: res.data[0].zip_code,
    //         phone: res.data[0].phone,
    //         email: res.data[0].email
    //         }
    //         this.props.updateUser(userInfo);
    // }


    render(){
        const userInfo = this.props.userInfo;
        console.log(this.props.match.params.id);
        return(
            <div className='dash-wrap'>
                <Header />
                <div className='dash-body'>
                    <div className='dash-header'>
                        Hello, {userInfo.first_name}!
                    </div>
                    <div className='dash-info'>
                        <ul className='dash-user-info'>
                            <li className='dash-user1'>{userInfo.first_name} {userInfo.last_name}</li>
                            <li className='dash-user2'>{userInfo.company}</li>
                            <li className='dash-user3'>{userInfo.address}</li>
                            <li className='dash-user4'>{userInfo.city}, {userInfo.state} {userInfo.zip_code}</li>
                            <li className='dash-user5'>{userInfo.phone}</li>
                            <li className='dash-user6'>{userInfo.email}</li>
                        </ul>
                        <ul className='dash-links'>
                            <Link to='/changeinfo'><button>Change Account Info</button></Link>
                            <Link to='/orderhistory'><button>Order History</button></Link>
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
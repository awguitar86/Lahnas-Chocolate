import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import './dashboard.css';

class Dashboard extends Component {
    render(){
        let name = 'Tim Burn';
        let company = 'Tim Burn Company';
        let address = '1234 Cool Ave.';
        let city = 'Layton, UT 84041';
        let phone = '(801) 555-1234';
        let email = 'timburn@gmail.com';
        return(
            <div className='dash-wrap'>
                <Header />
                <div className='dash-body'>
                    <div className='dash-header'>
                        Hello, {name}!
                    </div>
                    <div className='dash-info'>
                        <ul className='dash-user-info'>
                            <li className='dash-user1'>{name}</li>
                            <li className='dash-user2'>{company}</li>
                            <li className='dash-user3'>{address}</li>
                            <li className='dash-user4'>{city}</li>
                            <li className='dash-user5'>{phone}</li>
                            <li className='dash-user6'>{email}</li>
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

export default Dashboard;
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
        }
        // this.handleGetUser = this.handleGetUser.bind(this);
    }

    componentDidMount(){
        const id = this.props.match.params.id;
        findUserInfo(id)
        .then(res => {
            if (res.status !== 200) {
                alert(res);
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
                    email: res.data[0].email,
                })
            }
        })
        .catch( err => {throw err} )
    }

    render(){
        // const userInfo = this.props.userInfo;
        let firstName = this.state.first_name;
        let lastName = this.state.last_name;
        let company = this.state.company;
        let address = this.state.address;
        let city = this.state.city;
        let state = this.state.state;
        let zipCode = this.state.zip_code;
        let phone = this.state.phone;
        let email = this.state.email;
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
                            <li className='dash-user4'>{city}, {state} {zipCode}</li>
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

function mapStateToProps(state){
    return state;
}


export default connect(mapStateToProps, {updateUser}) (Dashboard);
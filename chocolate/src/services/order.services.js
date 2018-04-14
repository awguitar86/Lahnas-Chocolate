import axios from 'axios';

const baseURL = '/api/orders';

function getOrders(userid) {
    return axios
        .get(`${baseURL}/${userid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOrderSum(orderid) {
    return axios
        .get(`${baseURL}/total/${orderid}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOrderItems(userid, orderid){
    return axios
        .get(`${baseURL}/${userid}/${orderid}`)
        .then( res => res)
        .catch( err => {throw err})
}

export {
    getOrders,
    getOrderSum,
    getOrderItems
};
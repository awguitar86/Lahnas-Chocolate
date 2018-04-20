import axios from 'axios';

const baseURL = '/api/orders';

function getOrders(email) {
    return axios
        .get(`${baseURL}/${email}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOrder(id) {
    return axios
        .get(`${baseURL}/get/${id}`)
        .then( res => res )
        .catch( err => {throw err} );
}

function getOrderItems(orderid){
    return axios
        .get(`${baseURL}/items/${orderid}`)
        .then( res => res)
        .catch( err => {throw err})
}

// function getOrderSum(orderid) {
//     return axios
//         .get(`${baseURL}/total/${orderid}`)
//         .then( res => res )
//         .catch( err => {throw err} );
// }



export {
    getOrders,
    getOrder,
    getOrderItems
};
import axios from 'axios';

const baseURL = '/api/cart';

function getCartItems(userid) {
    return axios
        .get(`${baseURL}/${userid}`)
        .then( res => res )
        .catch( err => {throw err});
}

function createCartItems(userid, body) {
    return axios
        .post(`${baseURL}/new/${userid}`, body)
        .then( res => res )
        .catch( err => {throw err});
}

function deleteCartItems(userid) {
    return axios
    .delete(`${baseURL}/delete/${userid}`)
    .then( res => res )
    .catch( err => {throw err});
}

export {
    getCartItems,
    createCartItems
}
import axios from 'axios';

const baseURL = '/api/orders';

function getOrders(userid) {
    return axios
        .get(`${baseURL}/${userid}`)
        .then( res => res )
        .catch( err => {throw err});
}

export {
    getOrders
};
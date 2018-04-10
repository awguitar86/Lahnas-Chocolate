import axios from 'axios';

const baseURL = '/api/users';

function findUserInfo(id) {
    return axios
        .get(`${baseURL}/${id}`)
        .then( res => res )
        .catch( err => {throw err});
}

function updateUserInfo( id, body ) {
    return axios
        .put(`${baseURL}/update/${id}`, body)
        .then( res => res )
        .catch( err => {throw err} );
}

export {
    findUserInfo,
    updateUserInfo
};
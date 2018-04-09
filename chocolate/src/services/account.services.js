import axios from 'axios';

const baseURL = '/api/users';

function findUserInfo(id) {
    return axios
        .get(`${baseURL}/${id}`)
        .then( res => console.log(res.data))
        .catch( err => {throw err});
}

export {
    findUserInfo
};
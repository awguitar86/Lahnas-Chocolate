
export const UPDATE_AUTH = "UPDATE_AUTH";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const ADD_TO_CART = "ADD_TO_CART";
export const CREATE_CART_ITEM = "CREATE_CART_ITEM";
export const EMPTY_CART = "EMPTY_CART";
export const DELETE_ITEM = "DELETE_ITEM";

export function updateAuth(boolean){
    return {
        type: UPDATE_AUTH,
        payload: boolean
    }
}

export function updateUser(user){
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function updateCustomer(customer){
    return {
        type: UPDATE_CUSTOMER,
        payload: customer
    }
}

export function updateOrder(order){
    return {
        type: UPDATE_ORDER,
        payload: order
    }
}

export function addToCart(product){
    return {
        type: ADD_TO_CART,
        payload: product
    }
}

export function emptyCart(){
    return {
        type: EMPTY_CART,
    }
}

export function deleteItem() {
    return {
        type: DELETE_ITEM
    }
}

// export function createCartItem(userid, body){
//     console.log(body);
//     const request = axios.post(`${baseURL}/post`, body)
//                 .then( res => res )
//     const item = axios.get(`${baseURL}/${userid}`)
//                 .then( res => {
//                     console.log(res.data);
//                     return res.data;
//                 })
//     return {
//         type: CREATE_CART_ITEM,
//         payload: request
//     }
// }

export function getCartItem(item){
    return {
        type: CREATE_CART_ITEM,
        payload: item
    }
    // const request = axios.get(`${baseURL}/${userid}`)
    //             .then( res => {
    //                 let item = res.data;
    //                 console.log(res.data);

    //                 return item;
    //             })
}

// export function deleteFromCart(product) {
//     return {
//         type: DELETE_FROM_CART,
//         payload: product
//     }
// }

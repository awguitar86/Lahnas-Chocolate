// const UPDATE_PERSONAL_PROJECTS = "UPDATE_PERSONAL_PROJECTS";
// const UPDATE_RECENT_PROJECTS = "UPDATE_RECENT_PROJECTS";
// const UPDATE_PROJECT = "UPDATE_PROJECT";
export const UPDATE_AUTH = "UPDATE_AUTH";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_CUSTOMER = "UPDATE_CUSTOMER";
export const UPDATE_ORDER = "UPDATE_ORDER";
export const ADD_TO_CART = "ADD_TO_CART";
// export const DELETE_FROM_CART = "DELETE_FROM_CART";

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

// export function deleteFromCart(product) {
//     return {
//         type: DELETE_FROM_CART,
//         payload: product
//     }
// }

// export function addQty(qty){
//     return {
//         type: ADD_QTY,
//         payload: qty
//     }
// }

// export function updatePersonalProjects(personalProjects){
//     return {
//         type: UPDATE_PERSONAL_PROJECTS,
//         payload: personalProjects
//     }
// }

// export function updateRecentProjects(recentProjects){
//     return {
//         type: UPDATE_RECENT_PROJECTS,
//         payload: recentProjects
//     }
// }

// export function updateProjectRedux(project){
//     return {
//         type: UPDATE_PROJECT,
//         payload: project
//     }
// }
import { CREATE_CART_ITEM } from '../actions/actionCreators';

let cartState = {};

function cartItem( state = cartState, action ){
    switch( action.type ) {
        case CREATE_CART_ITEM:
            return Object.assign( action.payload );

        default:
        return state;
    }
}

export default cartItem;



// export function cartItem( state = {cart: []}, action ){
//     switch( action.type ) {
//         case CREATE_CART_ITEM:{
//             return {
//                 cart: [...state.cart, action.payload]
//             }
//         }
//         default:
//         return state;
//     }
// }

// let cartState = {};

// function cartItem( state = cartState, action ){
//     switch( action.type ) {
//         case CREATE_CART_ITEM:
//             return Object.assign( state, action.payload );

//         default:
//         return state;
//     }
// }
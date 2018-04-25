import { ADD_TO_CART } from '../actions/actionCreators';

export function cartReducer( state = {
        cart: []
    }, action ){
    switch( action.type ) {
        case ADD_TO_CART:{
            return {
                cart: [...state.cart, action.payload]
            }
        }
        // case EMPTY_CART: {
        //     return {
        //         cart: [...state.cart.]
        //     }
        // }

    default:
    return state;
    }
}

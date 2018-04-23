import { createStore, combineReducers, applyMiddleware } from 'redux';
import userInfo from './reducers/userInfo.reducer';
import customerInfo from './reducers/customer.reducer';
import orderInfo from './reducers/orderInfo.reducer';
import {cartReducer} from './reducers/cart.reducer';
import cartItem from './reducers/cartItem.reducer';
import promiseMiddleware from 'redux-promise-middleware';
// import authRouter from './ducks/auth.reducer';
// import dashboardInfo from './ducks/dashboardInfo.reducer';


let rootReducer = combineReducers({
    userInfo,
    customerInfo,
    orderInfo,
    cartReducer,
    cartItem
    // authRouter,
    // dashboardInfo,
})


export default createStore( rootReducer, applyMiddleware(promiseMiddleware()),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
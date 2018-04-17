import { createStore, combineReducers } from 'redux';
import userInfo from './reducers/userInfo.reducer';
import customerInfo from './reducers/customer.reducer';
import orderInfo from './reducers/orderInfo.reducer';
import {cartReducer} from './reducers/cart.reducer';
// import authRouter from './ducks/auth.reducer';
// import dashboardInfo from './ducks/dashboardInfo.reducer';


let rootReducer = combineReducers({
    userInfo,
    customerInfo,
    orderInfo,
    cartReducer,
    // authRouter,
    // dashboardInfo,
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
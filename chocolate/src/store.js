import { createStore, combineReducers } from 'redux';
import userInfo from './reducers/userInfo.reducer';
// import authRouter from './ducks/auth.reducer';
// import dashboardInfo from './ducks/dashboardInfo.reducer';


let rootReducer = combineReducers({
    userInfo,
    // authRouter,
    // dashboardInfo,
})


export default createStore( rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
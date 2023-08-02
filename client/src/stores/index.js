import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
import dressReducer from './reducers/dressReducer';
import userReducer from './reducers/userReducer';
import storeReducer from './reducers/storeReducer';
import paymentReducer from './reducers/paymentReducer';
import categoryReducer from './reducers/categoryReducer';


const rootReducer = combineReducers({
    dress: dressReducer,
    user: userReducer,
    store: storeReducer,
    category: categoryReducer,
    payment: paymentReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
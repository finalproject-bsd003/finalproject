import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
import dressReducer from './reducers/dressReducer';


const rootReducer = combineReducers({
    dress: dressReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
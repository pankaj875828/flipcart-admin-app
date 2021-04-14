import { combineReducers } from 'redux'
import authReducer from '../reducers/auth.readucers'


const rootReducer = combineReducers({
    auth:authReducer
});

export default rootReducer
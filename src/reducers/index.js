import {combineReducers} from 'redux'
import servicesReducer from './servicesReducer'
import postReducer from './postReducer'

export default combineReducers({
    services: servicesReducer,
    posts: postReducer
})
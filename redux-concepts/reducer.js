import { createStore, combineReducers } from 'redux'
//const {combineReducers} = require('redux')   // For running this JS file in Node
import {UPDATE_USER, INCREMENT} from './actions'

//Reducers
const userReducer = (stateUserField = '', action) => {
    if (action.type === UPDATE_USER) stateUserField = action.payload.name
    return stateUserField
}
const numReducer = (stateNumField = 0, action) => {
    switch(action.type) {
        case UPDATE_USER: 
            return stateNumField + 1
        case INCREMENT:
            return stateNumField + 10 
        default:
            return stateNumField
    }
}

//Create the larger reducer using the provided function
const reducer = combineReducers({
    name: userReducer,    //If name gets too complex, this also be combineReducers
    num: numReducer,
})

export default reducer
//Could have done export default combineReducer({...}) for compactness

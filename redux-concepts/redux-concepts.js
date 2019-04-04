//import { createStore, combineReducers } from 'redux'
const {createStore, combineReducers } = require('redux')   // For running this JS file in Node

//Action types
const UPDATE_USER = 'UPDATE_USER'
const INCREMENT = 'INCREMENT'

//Using redux's createStore implementation... So there is no need to declare store yourself

//Reducers
const userReducer = (stateUserField = '', action) => {
    if (action.type === UPDATE_USER) stateUserField = action.payload.name
    return stateUserField
}
const numReducer = (stateNumField = 0, action) => {
    if (action.type === UPDATE_USER) return stateNumField + 1
    if (action.type === INCREMENT) return stateNumField + 10
    return stateNumField
}

//Create the larger reducer using the provided function
const reducer = combineReducers({
    name: userReducer,
    num: numReducer,
})

// Using the Redux
const store = new createStore(reducer, {name: 'Utsav', num: 2})
store.dispatch({
    type: UPDATE_USER, 
    payload: {name: 'Kunal'}
})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})

console.log(store.getState())
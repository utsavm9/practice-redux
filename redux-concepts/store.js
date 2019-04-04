const {createStore} = require('redux')
const {reducer} = require('./reducer')
//import reducer from './reducer'

//const store = new createStore(reducer, {name: 'Utsav', num: 2}) TO need to do this

const store = new createStore(reducer) // Defaults are being handled by the children reducers
//export default store


//Using the store
store.dispatch({
    type: UPDATE_USER, 
    payload: {name: 'Kunal'}
})
store.dispatch({type: INCREMENT})

console.log(store.getState())
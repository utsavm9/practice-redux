//Action types
const UPDATE_USER = 'UPDATE_USER'
const INCREMENT = 'INCREMENT'

//Store
class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }

    dispatch(update) {
        this.state = this.reducer(this.state, update)
    }
}

//Reducers
const userReducer = (state, action) => {
    if (action.type === UPDATE_USER) return action.payload
    return state.user
}
const numReducer = (state, action) => {
    if (action.type === UPDATE_USER) return state.num + 1
    if (action.type === INCREMENT) return state.num + 10
    return state.num
}

const reducer = (store, action) => ({
    user: userReducer(store, action),
    num: numReducer(store, action),
})


// Using the Redux
const store = new Store(reducer, {name: 'Utsav', num: 0})
store.dispatch({
    type: UPDATE_USER, 
    payload: {name: 'Kunal'}
})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})

console.log(store.getState())
//Action types
const ADD_FIELD = 'ADD_FIELD'
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
const merge = (part1, part2) => Object.assign({}, part1, part2)
const addField = (state, update) => merge(state, update)
const incrementNum = (state) => { return {
        ...state,
        num: ((state.num) ? state.num + 1 : 1 ),
    }
}

const reducer = (store, action) => {
    if (action.type === ADD_FIELD) {
        return addField(store, action.payload)
    }
    if (action.type === INCREMENT) {
        return incrementNum(store)
    }
}


// Using the Redux
const store = new Store(reducer, {name: 'Utsavi'})
store.dispatch({
    type: ADD_FIELD, 
    payload: {age: 18}
})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})
store.dispatch({type: INCREMENT})

console.log(store.getState())   
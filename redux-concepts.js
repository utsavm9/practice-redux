const merge = (part1, part2) => Object.assign({}, part1, part2)
const reducer = (state, update) => merge(state, update)

class Store {
    constructor(reducer, initialState) {
        this.reducer = reducer
        this.state = initialState
    }

    getState() {
        return this.state
    }
}


const store = new Store(reducer, {name: 'Utsavi'})

//state = reducer(state, {name: 'Utsavi'})
//state = reducer(state, {age: '18'})
//state = reducer(state, {name: 'Utsav'})
console.log(store.getState())
// console.log("redux")
const redux = require("redux")


//1. acton bu using action creator
const increase = "increase"

const actionCreator = () =>{
    return{
        type : increase
    }
}



//2. reducer 
const initialState = {
    count  : 0
}

const reducer = (state = initialState,action) =>{
    switch(action.type){
        case increase : 
            return {
                ...state,
                count : state.count + 1
            }
            
        default : 
            return{
                state
            }
    }
}

// 3. store

const store = redux.createStore(reducer)

console.log("Initial State: ", store.getState() )

const unsubscribe = store.subscribe(()=> console.log('updates state:', store.getState()))

store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(actionCreator())

unsubscribe()
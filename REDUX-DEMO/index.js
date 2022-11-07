const redux = require('redux')
const createStore = redux.createStore 


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'
// an action is an object that have type property
//action creater is a function that return an action

function buyCake(){
    return{
        type:BUY_CAKE,
        info: 'First redux action'
    }
}

function buyIceCreams (){
    return{
        type:BUY_ICECREAMS,
        info: 'First redux action'
    }
}

//(preveousState,action) => newState
const initialState = {  
    numOfCakes : 10,
    numOfIceCreams: 20
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfCakes:state.numOfCakes-1
        }
        case BUY_ICECREAMS: return{
            ...state, numOfIceCreams:state.numOfIceCreams-1
        }

        default: return state
    }
}

const store = createStore (reducer);

console.log('Initial state',store.getState())

// subscribe method to make changes in stote

const unsubscribe= store.subscribe(()=> console.log('Updated state',store.getState()));

// store provide dispatch method to update the state by action

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCreams())
store.dispatch(buyIceCreams())

unsubscribe()
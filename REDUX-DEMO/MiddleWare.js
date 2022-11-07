const redux = require('redux')
const reduxLogger = require('redux-logger');
const createStore = redux.createStore

// to combine multiple reducers
const combinereducer = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAMS = 'BUY_ICECREAMS'

function buyCake(){
    return{
        type:BUY_CAKE,
        info:'First redux action'
    }
}

function buyIceCreams(){
    return{
        type:BUY_ICECREAMS,
        info:'First redux action'
    }
}

    const initialCakeState = {
        numOfCakes : 10
    }

    const initialIcecreameState = {
        numOfIceCreams : 20
    }


    // making different reducer for different purpose

    const reducerCake = (state = initialCakeState,action)=>{
        switch(action.type){
            case BUY_CAKE: return{
                ...state , numOfCakes : state.numOfCakes - 1
            }

            default: return state
        }
    }

    const reducerIceCreame = (state = initialIcecreameState,action)=>{
        switch(action.type){
            case BUY_ICECREAMS: return{
                ...state , numOfIceCreams : state.numOfIceCreams-1
            }

            default: return state
        }
    }

    const rootReducer = combinereducer({
        cake : reducerCake,
        iceCream : reducerIceCreame
    })
    const store = createStore(rootReducer,applyMiddleware(logger))

    console.log('Initial state', store.getState() )

    const unsubscribe = store.subscribe(()=>{})

    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyCake())
    store.dispatch(buyIceCreams())
    store.dispatch(buyIceCreams())

    unsubscribe()
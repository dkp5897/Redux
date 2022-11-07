const redux = require('redux')
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

const initialState = {
    loading : false,
    users: [],
    error: ''
}

//define actions constants
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILUER'

//action creater which return actions
const fetchUsersRequest = (loading)=>{
    return{
        type : FETCH_USERS_REQUEST,
        payload : loading
    }
}
const fetchUsersSuccess = (users)=>{
    return{
        type : FETCH_USERS_SUCCESS,
        payload : users
    }
}
const fetchUsersFailure = (error)=>{
    return{
        type : FETCH_USERS_FAILURE,
        payload : error
    }
}

//reducer function

const reducer = (state = initialState, action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            ...state ,
             loading: true
        }
        case FETCH_USERS_SUCCESS: return{
            loading: false,
            users: action.payload,
            error: ''
        }
        case FETCH_USERS_FAILURE: return{
            loading: false,
            users:[],
            error: action.payload
        }
        default: return state;
    }
}

// action creater which return a function 
const fetchusers = () =>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceho1lder.typicode.com/users')
        .then((response) => {
            //response.data is the array of users
            const users = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(users))
        }).catch((error) => {
            //error.massage is the error discription
            dispatch(fetchUsersFailure(error.message))
        });
    }
}

//thunkMiddleware will allow to an action creater to return an function instead of a object

const store = createStore(reducer,applyMiddleware(thunkMiddleware))
store.subscribe(()=> {console.log(store.getState())})
store.dispatch(fetchusers())
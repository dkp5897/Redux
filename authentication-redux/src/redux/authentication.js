import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name : 'authentication',
    initialState:{
        email : '',
        password:'',
        username:'',
        error :'',
        tokan:false
    },
    reducers:{
        registerSuccess:(state,action)=>{
            // console.log(action.payload)
            state.email = action.payload.email
            state.password = action.payload.password
            state.username = action.payload.username
        },
        loginSuccess:(state)=>{
            state.tokan = true
        },
        registerFailed:(state,action)=>{
            console.log(action.payload)
        },
        logout:(state)=>{
            state.tokan=false
            state.email=''
            state.password=''
            state.username=''
        }

    }
})

export default authSlice.reducer
export const {registerFailed,registerSuccess,loginSuccess,logout} = authSlice.actions
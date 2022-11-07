import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        counter1 : 0,
        counter2 : 0
    },
    reducers : {
        increment1:(state) =>{
            state.counter1 +=1
        },
        decrement1:(state) =>{
            state.counter1-=1
        },
        reset1 : (state) =>{
            state.counter1 = 0
        },
        increment2:(state,actions) =>{
            state.counter2 +=actions.payload
        },
        decrement2:(state,actions) =>{
            state.counter2-=actions.payload
        },
        reset2 : (state) =>{
            state.counter2 = 0
        }
    }
})

export default counterSlice.reducer
export const {increment1,decrement1,reset1,increment2,decrement2,reset2} = counterSlice.actions
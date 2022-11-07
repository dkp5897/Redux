import { configureStore } from "@reduxjs/toolkit";
import count from './CounterSlice'

const store = configureStore({
    reducer :{
        counter : count
    }
})

export default store
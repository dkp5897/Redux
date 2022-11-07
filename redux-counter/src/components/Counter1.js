
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement1, increment1, reset1} from '../redux/CounterSlice'

function Counter1() {
    const object = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    // console.log(object)
  return (
    <div>
      <h1>counter1:- {object.counter1}</h1>
      <button onClick={()=>dispatch(increment1())}>increase</button>
      <button onClick={()=>dispatch(decrement1())}>decrease</button>
      <button onClick={()=>dispatch(reset1())}>reset</button>
    </div>
  )
}

export default Counter1

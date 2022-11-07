
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {decrement2, increment2, reset2} from '../redux/CounterSlice'

function Counter2() {
    const object = useSelector((state) => state.counter)
    const dispatch = useDispatch()
    // console.log(object)
  return (
    <div>
      <h1>counter2:- {object.counter2}</h1>
      <button onClick={()=>dispatch(increment2(4))}>increase</button>
      <button onClick={()=>dispatch(decrement2(2))}>decrease</button>
      <button onClick={()=>dispatch(reset2())}>reset</button>
    </div>
  )
}

export default Counter2

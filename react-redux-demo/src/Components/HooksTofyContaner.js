
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buyTofy} from '../Redux'

function HooksTofyContaner() {
    const numOfTofies = useSelector((state)=>state.tofy.numOfTofies)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of Tofies - {numOfTofies} </h2>
      <button onClick={()=>dispatch(buyTofy())}>Buy Tofy</button>
    </div>
  )
}

export default HooksTofyContaner

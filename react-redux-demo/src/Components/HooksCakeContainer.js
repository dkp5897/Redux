import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCake} from '../Redux'

// React Redux provides a pair of custom React hooks that allow your React components to interact with the Redux store.
//useSelector reads a value from the store state and subscribes to updates, while useDispatch returns the store's dispatch method to let you dispatch actions.


function HooksCakeContainer() {
    const numOfCakes = useSelector(state => state.cake.numOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h2>Num of cakes - {numOfCakes}</h2>
      <button onClick={()=> dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer

import {applyMiddleware, configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';
import RootReducer from './RootReducer'
import logger from 'redux-logger'

const store = configureStore (RootReducer, composeWithDevTools(applyMiddleware(logger)))

export default store
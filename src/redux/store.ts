import {
    combineReducers,
    createStore,
    applyMiddleware, Middleware
} from '@reduxjs/toolkit'

import thunkMiddleware from 'redux-thunk'

import authSlice from './slices/AuthSlice'
import {createWrapper, HYDRATE} from "next-redux-wrapper";
import StateManagerService, {stateManagerServiceMiddleware} from "../services/StateManagerService";
import {injector} from "../config/DependencyInjection";


const combinedReducer = combineReducers({auth: authSlice});


const bindMiddleware = (middleware: Array<Middleware>) => {
    if (process.env.NODE_ENV !== 'production') {
        const {composeWithDevTools} = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}


const reducer = (state: any, action: any) => {
    if (action.type === HYDRATE) {
        console.log("here", action)
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        if (state?.count?.count) {
            nextState.count.count = state.count.count
            console.log("asfsasfaafs")
        }// preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}


const initStore = () => {
    const store = createStore(reducer, bindMiddleware([thunkMiddleware, stateManagerServiceMiddleware]))
    const stateManager: StateManagerService = injector.get(StateManagerService)
    stateManager.attachDispatch(store.dispatch)
    return store;
}

export const wrapper = createWrapper(initStore)
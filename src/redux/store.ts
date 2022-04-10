import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'

import authSlice from './slices/AuthSlice'
import {createWrapper} from "next-redux-wrapper";

export function makeStore() {
    return configureStore({
        reducer: {auth: authSlice},
    })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppState,
    unknown,
    Action<string>>

export default store


export const wrapper = createWrapper(makeStore)
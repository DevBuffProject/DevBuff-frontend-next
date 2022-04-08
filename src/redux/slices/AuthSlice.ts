import {createSlice} from "@reduxjs/toolkit";
import {AppState} from "../store";

interface AuthState {
    /**
     * Status of user authorization,
     */
    isAuthorized: boolean
}

const initialState: AuthState = {
    isAuthorized: false,
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        forbid: (state) => {
            state.isAuthorized = false
        },
        authorize: (state) => {
            state.isAuthorized = true
        },
    },
})

export const {forbid, authorize} = authSlice.actions

export const isAuthorized = (state: AppState) => state.auth.isAuthorized

export default authSlice.reducer
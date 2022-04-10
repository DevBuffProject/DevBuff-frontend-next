import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    /**
     * Status of user authorization,
     */
    isAuthorized: boolean | null
}

const initialState: AuthState = {
    isAuthorized: null,
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

export default authSlice.reducer
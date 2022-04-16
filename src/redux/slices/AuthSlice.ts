import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import User, {Authority} from "../../api/authorization/objects/User";

enum Role {
    User = "User",
    Admin = "Admin"
}

export interface AuthState {
    /**
     * Status of user authorization,
     */
    isAuthorized: boolean | null
    roles: Array<Role>
}

const initialState: AuthState = {
    isAuthorized: null,
    roles: []
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        forbid: (state) => {
            state.isAuthorized = false
            state.roles = []
        },
        authorize: (state, action: PayloadAction<User>) => {
            state.isAuthorized = true
            state.roles = action.payload.authorities.map((authority: Authority) => {
                return (authority as string) as Role
            })
        },
    },
})

export const {forbid, authorize} = authSlice.actions

export default authSlice.reducer
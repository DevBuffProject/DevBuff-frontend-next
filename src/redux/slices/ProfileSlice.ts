import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ProfileState {
    id: string
    firstName: string
    lastName: string
    userName: string
}

const initialState: ProfileState = {
    id: "",
    firstName: "Test",
    lastName: "Keke",
    userName: ""
}


export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        updateProfileState: (state: ProfileState, action: PayloadAction<ProfileState>) => {
            const payload = action.payload
            state.id = payload.id
            state.firstName = payload.firstName
            state.lastName = payload.lastName
            state.userName = payload.userName
        },
    },
})

export const {updateProfileState} = profileSlice.actions

export default profileSlice.reducer
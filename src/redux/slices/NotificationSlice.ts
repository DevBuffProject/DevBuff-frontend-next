import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";


export interface NotificationState {
    hasUnread: boolean
}

const initialState: NotificationState = {
    hasUnread: false
}


export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        updateNotifications: (state: Draft<NotificationState>, action: PayloadAction<boolean>) => {
            state.hasUnread = action.payload
        }
    },
})

export const {updateNotifications} = notificationSlice.actions

export default notificationSlice.reducer
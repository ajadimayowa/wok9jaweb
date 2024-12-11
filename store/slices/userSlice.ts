import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    credentials: {
        fullName: '',
        userName: '',
        token: '',
    },
    navigations: []
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        trackNavigation: (state, action) => { },
        updateuser: (state, action) => {
            state.credentials = action.payload
        },
        logOutUser: (state, action) => {
            state.credentials = {
                fullName: '',
                userName: '',
                token: '',
            }
        }
    }
})

export const { trackNavigation, updateuser, logOutUser } = userSlice.actions
export default userSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    credentials: {
        email: "",
        fullName: "",
        userId: "",
        userName: "",
        token: ''
    },
    navigations: [{ nameOfPath: 'Home', url: '/', id: '6573' }]
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        updateNavigation: (state, action) => {
            const { nameOfPath, url, id } = action.payload
            state.navigations.push({ nameOfPath, url, id })
        },
        deductClickedpath: (state, action) => {
            state.navigations = action.payload
        },
        updateUser: (state, action) => {
            state.credentials = action.payload
        },
        logOutUser: (state, action) => {
            state.credentials = {
                email: "",
                fullName: "",
                userId: "",
                userName: "",
                token: '',
            }
        }
    }
})

export const { updateNavigation, updateUser, logOutUser,deductClickedpath } = userSlice.actions
export default userSlice.reducer
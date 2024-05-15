import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userName: '',
        firstName: '',
        lastName: '',
    },
    reducers: {
        userInfo: (state, action) => {
            state.userName = action.payload.userName,
            state.firstName = action.payload.firstName,
            state.lastName = action.payload.lastName
        },
        removeUser: (state) => {
            state.userName = '',
            state.firstName = '',
            state.lastName = ''
        }
    }
})

export const { userInfo, removeUser } = userSlice.actions;
export default userSlice.reducer
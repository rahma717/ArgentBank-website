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
        }
    }
})

export const { userInfo } = userSlice.actions;
export default userSlice.reducer
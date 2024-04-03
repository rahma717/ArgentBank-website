import { createSlice } from '@reduxjs/toolkit';

  
  
  const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
    },
    reducers: {
      login: (state, action) => {
        state.token = action.payload
        state.isLoggedIn = true
      } 
      },
    },

  );

export const { login } = authSlice.actions; 
export default authSlice.reducer;

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/auth.slice';
import userSlice from './slice/user.slice';

export default configureStore({
  reducer: {
    auth: authReducer,
    user: userSlice
  },
})
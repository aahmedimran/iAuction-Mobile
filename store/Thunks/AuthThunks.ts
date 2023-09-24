import {createAsyncThunk} from '@reduxjs/toolkit';
import {loginUser} from '../../services/Authapi';


export const getUserProfile: any = createAsyncThunk(
  'user/login',
 async ({email, password}: any) => loginUser(email, password),
);

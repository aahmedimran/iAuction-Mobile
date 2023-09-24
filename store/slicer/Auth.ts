import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getUserProfile} from '../Thunks/AuthThunks';

export interface profile {
  userId: string;
  data: Data;
  error: boolean;
  message: string;
}

export interface Data {
  lastName: string;
  firstName: string;
}
export type UserProfileInitialState = {
  data: any;
  loading: boolean;
  error: any;
};
const initialState: UserProfileInitialState = {
  data: [],
  loading: false,
  error: '',
};
const userProfileSlicer = createSlice({
  name: 'UserProfile',
  initialState: initialState,
  reducers: {
    setuserData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    // login
    builder.addCase(getUserProfile.pending, state => {
      state.loading = true;
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userProfileData = userProfileSlicer.reducer;

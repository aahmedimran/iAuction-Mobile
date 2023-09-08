import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export type UserProfile = {
    profileId: string;
    profileName: string;
    primaryCurrency: string;
    accountNumber: string;
    language: string;
    timezone: string;
    accountType: string;
    bio: string;
    createdAt: string;
    updatedAt: string;
    avatar: string;
    awardsEarned: number;
    awardsGiven: number;
    netAwardsAvailable: number;
    emailAddress: string | null;
    napaWalletAccount: string | null;          
    binanceWalletAccount: string | null;
    dailyActive: string;
    monthlyActive: string;
};
export type CreateUserProfileInitialState = {
    data: UserProfile[];
    loading: boolean;
    error: string
};
const initialState: CreateUserProfileInitialState = {
    data: [],
    loading: false,
    error: "",
};
export const getUserProfile: any = createAsyncThunk("profile/Get", (data) =>console.log(data) );
const getUserProfileSlicer = createSlice({
    name: "UserProfile",
    initialState: initialState,
    reducers: {setuserData(state,action){
      state.data =action.payload
    }
      },
    extraReducers: (builder) => {
        builder.addCase(getUserProfile.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getUserProfile.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload
            state.error = ""
        });
        builder.addCase(getUserProfile.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
            console.log(state.error, "state.error")
        });
    },
});



export const CreateUserProfileData = getUserProfile.reducer
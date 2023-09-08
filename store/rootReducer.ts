import { combineReducers } from "@reduxjs/toolkit";
import { CreateUserProfileData } from "./slicer/Auth";


const rootReducers = combineReducers({
    user: CreateUserProfileData,
});
export default rootReducers;
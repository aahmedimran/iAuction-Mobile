
import { combineReducers } from "@reduxjs/toolkit";
import { counterSlice } from "./slicer/Auth";


const rootReducers = combineReducers({
    todo: counterSlice.reducer,
});
export default rootReducers;
import { createSelector } from "@reduxjs/toolkit";
//@ts-ignore
import { RootState } from "..";
export const selectuser = (state: RootState) => state.user;
export const selectuserdata = createSelector(selectuser, (state: any) => state.data)
export const selectuserLoading = createSelector(selectuser, (state: any) => state.loading)
export const selectuserError = createSelector(selectuser, (state: any) => state.error)
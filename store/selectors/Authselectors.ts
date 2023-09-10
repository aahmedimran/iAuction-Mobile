import { createSelector } from "@reduxjs/toolkit";
export const selectuser = (state:any) => state.user;
export const selectuserdata = createSelector(selectuser, (state: any) => state.data)
export const selectuserLoading = createSelector(selectuser, (state: any) => state.loading)
export const selectuserError = createSelector(selectuser, (state: any) => state.error)
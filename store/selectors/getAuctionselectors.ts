import { createSelector } from "@reduxjs/toolkit";
export const selectAuctionItem = (state:any) => state.AuctionItem;
export const selectAuctionItemdata = createSelector(selectAuctionItem, (state: any) => state.data)
export const selectAuctionItemLoading = createSelector(selectAuctionItem, (state: any) => state.loading)
export const selectAuctionItemError = createSelector(selectAuctionItem, (state: any) => state.error)
import {combineReducers} from '@reduxjs/toolkit';
import {userProfileData} from './slicer/Auth';
import {getAuctionItemData} from './slicer/GetAuction';

const rootReducers = combineReducers({
  user: userProfileData,
  AuctionItem: getAuctionItemData,
});
export default rootReducers;

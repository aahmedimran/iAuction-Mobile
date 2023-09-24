import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {getAuctionItemProductData} from '../../services/AuctionApi'
export interface AuctionItem {
  id: string;
  product: {
    Category: string;
    Name: string;
    aceaptedBid: any[];
    auctionEndTime: number;
    bidder: any[];
    confirmBid: boolean;
    description: string;
    file: string;
    isBid: boolean;
    price: string;
    type: string;
    userId: string;
  };
}
export type getAuctionItemState = {
  data: AuctionItem[];
  loading: boolean;
  error: any;
};
const initialState: getAuctionItemState = {
  data: [],
  loading: false,
  error: '',
};
export const getAuctionItem:any = createAsyncThunk( 'auctionItems/fetchAuctionItems',() =>getAuctionItemProductData());
const getAuctionItemSlicer = createSlice({
  name: 'AuctionItem',
  initialState: initialState,
  reducers: {
    setuserData(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getAuctionItem.pending, state => {
      state.loading = true;
    });
    builder.addCase(getAuctionItem.fulfilled, (state, action) => {

      state.loading = false;
      state.data = action.payload;
      state.error = '';
    });
    builder.addCase(getAuctionItem.rejected, (state, action) => {

      state.loading = false;
      state.error = action.payload;
      console.log(state.error, 'state.error');
    });
  },
});

export const getAuctionItemData = getAuctionItemSlicer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const coinState = createSlice({
  name: "coinState",
  initialState: {
    coinList: [],
  },
  reducers: {
    setCoinList: (state, action) => {
      state.coinList = action.payload;
    },
  },
});

export const { setCoinList } = coinState.actions;
export default coinState.reducer;
